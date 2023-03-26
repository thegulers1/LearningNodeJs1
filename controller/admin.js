const Product = require('../models/product')


exports.getProducts = (req,res,next)=>{
    // res.sendFile(path.join(__dirname,'../','views','index.html'));
    const products = Product.getAll();
    res.render('admin/products', {
       title:'Admin Products',
       products: products,
       path:'/admin/products'
    });
}

exports.getAddProduct = (req,res,next)=>{
        res.render('admin/add-product', {
          title:'New Product',
          path:'/admin/add-product'
       });
    }
exports.postAddProduct = (req,res,next)=>{
    const product = new Product(
        req.body.name,
        req.body.price,
        req.body.image,
        req.body.description)
    product.saveProduct();
    }
// product edit sayfasında kı textbox alanların dolmasını burda yapıyoruz.    
exports.getEditProduct = (req,res,next)=>{
        const product = Product.getById(req.params.productid);

        res.render('admin/edit-product', {
          title:'Edit product',
          path:'/admin/products',
          product : product
       });
    }
exports.postEditProduct = (req,res,next) => {
    const product = Product.getById(req.body.id);
    console.log(req.body);
    product.name = req.body.name;
    product.price = req.body.price;
    product.image = req.body.image;
    product.description = req.body.description

    Product.Update(product); // model ıcınde update fonksıyonu yazdık burda o fonksıyonu cagardık
    res.redirect('/admin/products');
}