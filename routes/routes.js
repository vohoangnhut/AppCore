const express = require('express')
const router = express.Router()
const defualtController = require('../controller/defaultController')
const homeController = require('../controller/homeController')
const sys001_Controller = require('../controller/sys_001_Ctlr')
const sys002_Controller = require('../controller/sys_002_controller')
const sys003_Controller = require('../controller/sys_003_controller')

const loginService = require('../services/loginService')
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;

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


router.get('/', ensureAuthenticated ,defualtController.homePage);

function ensureAuthenticated(req, res, next){
	if(req.isAuthenticated()){
		return next();
	} else {
		req.flash('error_msg','You are not logged in');
		res.redirect('/login');
	}
}


router.get('/login',defualtController.get_login);
router.post('/login', passport.authenticate('local', {successRedirect:'/', failureRedirect:'/login',failureFlash: true}));

router.get('/logout', defualtController.get_logout);

router.route('/logindemo')
        .get(homeController.get_userlogin)
        .post(homeController.post_userlogin)

router.route('/getUserList')
        .get(homeController.getUserList)


/**
 * GET : Read
 * POST : Create
 * PUT : Update
 * DELETE : Delete
 * **/
        
 router.route('/sys_001')
        .get(sys001_Controller.get_sys_001)       
        .post(sys001_Controller.post_sys_001)    
        .put(sys001_Controller.put_sys_001)
        .delete(sys001_Controller.delete_sys_001)

router.route('/sys_002')
        .get(sys002_Controller.getSys002)       

router.route('/sys_003')
        .get(sys003_Controller.getSys003)  
        .post(sys003_Controller.postSys003)
        

router.get('*',defualtController.pagenotfound)

module.exports = router