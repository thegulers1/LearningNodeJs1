const express = require('express')
const router = express.Router();
const bodyParser = require('body-parser');
const accountController =  require('../controller/account')


router.get('/login',accountController.getLogin)
router.post('/login',accountController.postLogin)

router.get('/register',accountController.getRegister)
router.post('/register',accountController.postRegister)

router.get('/reset',accountController.getReset)
router.post('/reset',accountController.postReset)

module.exports = router

