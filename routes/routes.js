const express = require('express')
const router = express.Router()
const defualtController = require('../controller/defaultController')
const homeController = require('../controller/homeController')

router.get('/',defualtController.returnHomePage);
router.get('/login',defualtController.getIndexView);

router.route('/logindemo')
        .get(homeController.get_userlogin)
        .post(homeController.post_userlogin)

router.route('/getUserList')
        .get(homeController.getUserList)
        

router.get('*',defualtController.pagenotfound);

module.exports = router