const express = require('express')
const router = express.Router()
const defualtController = require('../controller/defaultController')
const homeController = require('../controller/homeController')
const sys001_Controller = require('../controller/sys_001_Ctlr')
const sys002_Controller = require('../controller/sys_002_controller')
const sys003_Controller = require('../controller/sys_003_controller')


router.get('/',defualtController.homePage);

router.route('/login')
        .get(defualtController.get_login)
        .post(defualtController.post_login)

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