const LocalStrategy = require('passport-local').Strategy;
const loginService = require('../services/loginService')

module.exports = function(passport) {
    passport.serializeUser(function(user, done) {
        done(null, user.id);
    });

    passport.deserializeUser(function(id, done) {
            loginService.getUserById(id).then(
                function(user,err) {done(err, user);});
    });

    passport.use(new LocalStrategy(
                    { usernameField: 'usrEml',
                    passwordField: 'usrPsw'},
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
}