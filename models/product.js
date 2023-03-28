const connection = require('../utility/database');  

async function getAllData(){
    try{
        const pool = await dbConn();
        const recordSet = pool.query("select * from products")
        pool.close()
        return recordSet
    }catch(err){
        console.log(err)
    }
} 

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
    static getAll(){
        getAllData()
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
