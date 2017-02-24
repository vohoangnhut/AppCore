const express = require('express')
const router = express.Router()
const defualtController = require('../controller/defaultController')

router.get('/',defualtController.returnHomePage);
router.get('/home',defualtController.getIndexView);

module.exports = router
