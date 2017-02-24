const express = require('express')
const router = express.Router()
const defualtController = require('../controller/defaultController')

router.get('/',defualtController.returnHomePage);
router.get('/home',defualtController.getIndexView);

router.get('/abc', function(req,res){
 res.send(`fuck offffffff`)
});

module.exports = router

