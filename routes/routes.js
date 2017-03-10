const express = require('express')
const router = express.Router()
const defualtController = require('../controller/defaultController')

router.get('/',defualtController.returnHomePage);
router.get('/login',defualtController.getIndexView);

router.get('*',defualtController.pagenotfound);

module.exports = router
