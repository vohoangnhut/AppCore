const LocalStrategy = require('passport-local').Strategy;
const FacebookStrategy = require('passport-facebook').Strategy;
const loginService = require('../services/loginService')
const userFacebookService = require('../services/userFacebookService')

// load the auth variables
var configAuth = require('./auth'); // use this one for testing
const userService = require('../services/userService')

module.exports = function(passport) {
    passport.serializeUser(function(user, done) {
        done(null, user.id);
    });

    passport.deserializeUser(function(id, done) {
            loginService.getUserById(id).then(
                function(user,err) {done(err, user);});
    });

    passport.use(new LocalStrategy({ usernameField: 'usrEml',passwordField: 'usrPsw'},
        function(username, password, done) {
                loginService.selectUserByMail(username).then(
                function(user, err) {
                                        if (err) { return done(err); }

                                        if (!user) {
                                                return done(null, false, { message: 'Incorrect Email.' });
                                        }

                                        user.validPassword(password, function (err, result) {
                                                if(err) throw err;

                                                if (!result) 
                                                        return done(null, false, { message: 'Incorrect password.' });
                                                else
                                                        return done(null, user);
                                        });

                })
        }
    ));

    passport.use(new FacebookStrategy(
        {
                clientID: '435367986812872',
                clientSecret: '9f8f6d1e4c96dd5624a5634980e77582',
                callbackURL: 'http://localhost:8080/auth/facebook/callback',
                profileFields: ['id', 'displayName', 'emails']
        },

    function(accessToken, refreshToken, profile, done) {
        loginService.selectUserByMail((profile.emails[0].value || '').toLowerCase()).then(
            function(user, err) {
                if (err) { return done(err); }
                if (!user) {
                    userService.insertUser(
                        profile.displayName, 
                        (profile.emails[0].value || '').toLowerCase(),
                        accessToken)
                        .then(
                            function(user,err){
                                console.log(user);
                                if (err)
                                    return done(err);
                                    
                                return done(null, user);
                            }
                        )
                }

                 done(null, user);

        })
    }));
    
    // function(accessToken, refreshToken, profile, done) {
    //     loginService.selectUserFacebookById(profile.id).then(
    //         function(user, err) {
    //             if (err) { return done(err); }
    //             if (!user) {
    //                 userFacebookService.insertUserFacebook(
    //                     profile.id,
    //                     accessToken,
    //                     profile.displayName, 
    //                     (profile.emails[0].value || '').toLowerCase()).then(
    //                         function(user,err){
    //                             if (err)
    //                                 return done(err);
                                    
    //                             return done(null, user);
    //                         }
    //                     )
    //             }

    //              done(null, user);

    //     })
    // }));

}