const express =require("express")
const router = express.Router();
const admin = require('./admin')
const shopController = require('../controller/shop')

router.get('/',shopController.getIndex);
router.get('/products',shopController.getProducts);

//ürüne ait bir id girildiğinde çalışacak conroller daki fonksiyon
router.get('/products/:productid',shopController.getProduct);
router.get('/details',shopController.getProductDetails);
router.get('/cart',shopController.getCart);
router.get('/orders',shopController.getOrders);
 
router.get('/categories/:categoryid',shopController.getProductsByCategory);


module.exports = router;
 