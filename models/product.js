const connection = require('../utility/database');  



module.exports = class Product{
    constructor(name,price,image,description,categoryid){      
        this.name = name;
        this.price = price;
        this.image = image;
        this.description = description;
        this.categoryid = categoryid;
        
    }  
    saveProduct(){

    }
    get
    static getAll() {
    }
 
    static getById(id){

            
    }
   
    static getProductsByCategoryId(categoryid){

    }

    static Update(product){


    }
    static DeleteById(id){

    }
}   
