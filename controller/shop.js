const Category = require('../models/category');
const Product = require('../models/product')

exports.getIndex = (req, res, next) => {
    // res.sendFile(path.join(__dirname,'../','views','index.html'));
    // const products = Product.getAll();
    // const categories = Category.getAll();
    console.log('-----------------------------------------', req.session.isAuthenticated)
    Product.findAll(
        {
            attributes: ['id', 'name', 'price', 'imageUrl'], //sadece cekmek ıstedıgımız alanları cekmek ıcın kullanılır 
        })
        .then(products => {
            Category.findAll()
                .then(categories => {
                    res.render('shop/index', {
                        title: 'Shopping',
                        products: products,
                        categories: categories,
                        path: '/',
                        isAuthenticated: req.session.isAuthenticated
                    });
                }).catch(err => {
                    console.log(err)
                });
        }).catch(err => {
            console.log(err)
        });
}

//db dekı tum urunlerı almak ıcın bunu kullanıyorz fınd all   
exports.getProducts = (req, res, next) => {
    //const categories = Category.getAll();
    Product.findAll()
        .then(products => {
            Category.findAll()
                .then(categories => {
                    res.render('shop/products', {
                        title: 'Products',
                        products: products,
                        categories: categories,
                        path: '/products',
                    }).catch(err => {
                        console.log(err)
                    });
        }).catch(err => {
            console.log(err)
            });
        });
}
//product Id ıle ılgılı productın sayfasının acılmasını saglar   bunun ıcın product model de getbyıd dıye bır fonksıtyonda tanımladık.

//findByPk ile de tek bır urune ulasabılırım findAll ıcınde where cumlesı kullanarak da tek bır elemana ulasabılırım. id den farklı parametreler vermek ıstedıgım de where kullanmam gerek
exports.getProduct = (req, res, next) => {
    Product.findAll({
        attributes: ['id', 'name', 'price', 'imageUrl', 'description'],
        where: { id: req.params.productid }
    })
        .then(products => {
            res.render('shop/product-detail', {
                title: products[0].name,
                product: products[0],
                path: '/products',
                 
            });
        })
        .catch(err => {
            console.log(err)
        })
    // Product.findByPk(req.params.productid)
    //     .then((product) =>{ 
    //          res.render('shop/product-detail',{
    //             title: product.name,
    //             product : product,
    //             path : '/products'
    //          })
    //     }).catch((err)=>{
    //         console.log(err)
    //     }); 
}
exports.getProductsByCategoryId = (req, res, next) => {
    // const categoryid = req.params.categoryid;
    const products = Product.getProductsByCategoryId(categoryid);
    //const categories = Category.getAll();    
    res.render('shop/products', {
        title: 'Products',
        products: products,
        //  categories : categories,
        //  selectedCategory :categoryid,é
        path: '/products'
    })
}


exports.getCart = (req, res, next) => {
    res.render('shop/cart', {
        title: 'Cart',
        path: '/cart'
    })
}
exports.getOrders = (req, res, next) => {
    res.render('shop/orders', {
        title: 'Orders',
        path: '/orders'
    })
}

