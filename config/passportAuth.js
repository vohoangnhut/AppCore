const LocalStrategy = require('passport-local').Strategy;
const FacebookStrategy = require('passport-facebook').Strategy;
const loginService = require('../services/loginService');

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
                loginService.selectUserByMail(username, 'Y').then(
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
                clientID: configAuth.facebookAuth.clientID,
                clientSecret: configAuth.facebookAuth.clientSecret,
                callbackURL: configAuth.facebookAuth.callbackURL,
                profileFields: ['id', 'displayName', 'emails'],
                //passReqToCallback: true //Req.body.foo
        },

    function( accessToken, refreshToken, profile, done) {
        process.nextTick(function(){
                loginService.selectUserByMail((profile.emails[0].value || '').toLowerCase(), 'N').then(

                function(user, err) {
                    if (err) 
                    { console.log(`err throw`); return done(err); }

                    if (!user) {
                        if(profile.emails[0].value != '')
                            {
                                userService.insertUser( profile.displayName, null , (profile.emails[0].value || '').toLowerCase(), 'N')
                                    .then(
                                        function(user,err){
                                            console.log(`after insert facebook user : ${user}`);

                                            if (err) return done(err);
                                                
                                            return done(null, user);
                                        }
                                    )
                            }
                        else{
                            console.log(`Something happenning ! can not get email.`)
                            return done(null, false, { message: 'Something happenning ! can not get email.' });
                        }
                    }else {
                        //Exist User
                        console.log(`login by face - exist user`)
                        return done(null, user); 
                    }
            })
        })
        
    }));
}