const express = require('express')
const router = express.Router();
const bodyParser = require('body-parser');
// const path = require('path') // artık kullanmıyoruz cunkı render metodunu kuulanıyoruz
const adminController = require('../controller/admin');
const { NText } = require('mssql');
const isAuthenticated = require('../middleware/authentication')

//admin/add-product => GET
router.get('/add-product',isAuthenticated,adminController.getAddProduct);
//admin/add-product => POST
router.post('/add-product',isAuthenticated,adminController.postAddProduct);

router.get('/products/:productid',isAuthenticated,adminController.getEditProduct);

router.post('/products',isAuthenticated,adminController.postEditProduct);

router.get('/products',isAuthenticated,adminController.getProducts);

router.post('/delete-product',isAuthenticated,adminController.postDeleteProduct);





// module.exports = {router,products};

module.exports = router;
//exports.products = products; // mvc yapısına gectıkten sonra controller altına gıttı buna gerek kalmadı.