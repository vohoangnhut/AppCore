// const express = require('express')
// const router = express.Router()
const defualtController = require('../controller/defaultController')
const sys001_Controller = require('../controller/sys_001_controller')
const sys002_Controller = require('../controller/sys_002_controller')
const sys003_Controller = require('../controller/sys_003_controller')

module.exports = (app , passport) => {
        
        app.get('/', isLoggedIn ,defualtController.homePage);
        app.get('/login',defualtController.get_login);
        app.post('/login', passport.authenticate('local', {successRedirect:'/', failureRedirect:'/login',failureFlash: true}));
        app.get('/logout', defualtController.get_logout);

        /**
         * GET : Read
         * POST : Create
         * PUT : Update
         * DELETE : Delete
         * **/
                
        app.route('/sys_001')
                .get(sys001_Controller.get_sys_001)       
                .post(sys001_Controller.post_sys_001)    
                .put(sys001_Controller.put_sys_001)
                .delete(sys001_Controller.delete_sys_001)

        app.route('/sys_002')
                .get(isLoggedIn , sys002_Controller.getSys002)       

        app.route('/sys_003')
                .get(isLoggedIn, sys003_Controller.getSys003)  
                .post(sys003_Controller.postSys003)


        app.get('/auth/facebook', passport.authenticate('facebook', { 
                scope: [
                        'email'
                        ] 
                }));
        app.get('/auth/facebook/callback', passport.authenticate('facebook', { successRedirect: '/', failureRedirect: '/login',failureFlash: true }));        
        
        app.get('*',defualtController.pagenotfound)
}

function isLoggedIn(req, res, next){
	if(req.isAuthenticated())
	        return next();
	
        req.flash('error_msg','You are not logged in');
        res.redirect('/login');
}