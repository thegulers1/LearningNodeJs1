const Product = require('../models/product');
const Category = require('../models/category');


exports.getProducts = (req,res,next)=>{
     Product.findAll()
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
    Category.findAll()
    .then((categories)=>{
        res.render('admin/add-product', {
            title:'New Product',
            path:'/admin/add-product',
            categories : categories
        });
    }).catch((err)=>{
            console.log(err)
        })





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
       const categoryid  = req.body.categoryid
       Product.create({
            name : name,
            price: price,
            imageUrl : imageUrl,
            description :description,
            categoryid : categoryid
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
 
        Product.findByPk(req.params.productid) 
            .then((product) =>{  
                if(!product){
                    return redirect('/')
                }
                Category.findAll()
                .then((categories)=>{
                    res.render('admin/edit-product', {
                        title:'Edit product',
                        path:'/admin/products',
                        product : product,
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
    const id = req.body.id;
    const name = req.body.name;
    const price = req.body.price;
    const imageUrl = req.body.imageUrl;
    const description = req.body.description;
    const categoryId  = req.body.categoryId

    Product.findByPk(id)
        .then(product=>{
            product.name = name;
            product.price = price;
            product.imageUrl = imageUrl;
            product.description = description;
            product.categoryId = categoryId;
            return product.save();

        }).then(result=>{
            console.log("updated")
            res.redirect('/admin/products?action=edit');
        }).catch(err=>{
            console.log(err)
        })

    // Product.Update(product).then(()=>{
    //     res.redirect('/admin/products?action=edit');
    //    }).catch((err)=>{
    //         console.log(err)
    //    });
}

exports.postDeleteProduct = (req,res,next)=>{
   const id = req.body.productid;
   Product.findByPk(id)
   .then(product=>{
       return product.destroy();
   }).then(result=>{
    console.log("deleted success")
    res.redirect('/admin/products?action=delete');
}).catch(err=>{
    console.log(err)
   })

 //silme yontemlerinden bırısı asagıdakıdır

//    Product.destroy({where : {id : id}})
//        .then(()=>{
//             res.redirect('/admin/products?action=delete');
//             console.log(err);
//     }).catch(err=>{
//             console.log(err)
//     });
   
    // Product.DeleteById(req.body.productid) 
    // .then((product) =>{ console.log(product)
    //     res.redirect('/admin/products?action=delete');
    //     }).catch((err)=>{
    //         console.log(err)
    //     }); 
    
}