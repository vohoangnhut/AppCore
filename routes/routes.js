const express = require('express')
const router = express.Router()
const defualtController = require('../controller/defaultController')
const homeController = require('../controller/homeController')
const sys001_Controller = require('../controller/sys_001_Ctlr')

router.get('/',defualtController.returnHomePage);
router.get('/login',defualtController.getIndexView);

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
        

router.get('*',defualtController.pagenotfound)

module.exports = router