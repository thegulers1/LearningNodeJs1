const express = require('express')
const router = express.Router();
const bodyParser = require('body-parser');
// const path = require('path') // artık kullanmıyoruz cunkı render metodunu kuulanıyoruz
const adminController = require('../controller/admin')


//admin/add-product => GET
router.get('/add-product',adminController.getAddProduct);
//admin/add-product => POST
router.post('/add-product',adminController.postAddProduct);

router.get('/products/:productid',adminController.getEditProduct);

router.post('/products',adminController.postEditProduct);

router.get('/products',adminController.getProducts);

router.post('/delete-product',adminController.postDeleteProduct);





// module.exports = {router,products};

module.exports = router;
//exports.products = products; // mvc yapısına gectıkten sonra controller altına gıttı buna gerek kalmadı.