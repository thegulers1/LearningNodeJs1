const Product = require('../models/product');
const Category = require('../models/category');


exports.getProducts = (req,res,next)=>{
     Product.getAll()
    .then(products =>{
         res.render('admin/products', {
            title:'Admin Products',
            products: products,
            path:'/admin/products',
            action: req.query.action
         });     
    })
    .catch((err) =>{
        console.log(err)
    });
 }
exports.getAddProduct = (req,res,next)=>{
    res.render('admin/add-product', {
        title:'New Product',
        path:'/admin/add-product',
       // categories : categories
    });
        // Category.getAll()
        //     .then((categories)=>{
        //         res.render('admin/add-product', {
        //             title:'New Product',
        //             path:'/admin/add-product',
        //             categories : categories
        //         });

        //         }).catch((err)=>{
        //             console.log(err)
        //         })

    }
exports.postAddProduct = (req,res,next)=>{
       //const product = new Product();

       const name =  req.body.name;
       const price =  req.body.price;
       const imageUrl =  req.body.imageUrl;
      // const categoryid = req.body.categoryid;
       const description =  req.body.description;

       Product.create({
            name : name,
            price: price,
            imageUrl : imageUrl,
            description :description
       }).then(result=>{
            console.log(result);
            res.redirect('/')
       }).catch((err)=>{
            console.log(err)
       })

       /*
       product.saveProduct().then(()=>{
        res.redirect('/')
       }).catch((err)=>{
            console.log(err)
       });*/
       //res.json({ message: 'Save Success' });
       
    }
// product edit sayfasında kı textbox alanların dolmasını burda yapıyoruz.    
exports.getEditProduct = (req,res,next)=>{
 
        Product.getById(req.params.productid) 
            .then((product) =>{  
                Category.getAll()
                .then((categories)=>{
                    console.log(categories)
                    res.render('admin/edit-product', {
                        title:'Edit product',
                        path:'/admin/products',
                        product : product[0],
                        categories : categories
            
                    })  
                }).catch((err)=>{
                        console.log(err)
                    })
            }).catch((err)=>{
                console.log(err)
            }); 


 
    }//burayı sor yukardakı sevde degısken . functıon adı calıstı asagıda calısmıyor 
exports.postEditProduct = (req,res,next) => {
    const product = new Product();
    product.id = req.body.id;
    product.name = req.body.name;
    product.price = req.body.price;
    product.image = req.body.image;
    product.description = req.body.description;
    Product.Update(product).then(()=>{
        res.redirect('/admin/products?action=edit');
       }).catch((err)=>{
            console.log(err)
       });
     


}

exports.postDeleteProduct = (req,res,next)=>{
    Product.DeleteById(req.body.productid) 
    .then((product) =>{ console.log(product)
        res.redirect('/admin/products?action=delete');
        }).catch((err)=>{
            console.log(err)
        }); 
    
}