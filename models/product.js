const connection = require('../utility/database');  

async function getAllData(){
    try{
        const pool = await connection();
        const recordSet =await pool.query("select * from product")
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
    static getAll() {
        getAllData()      }

    static getById(id){

            
    }
   
    static getProductsByCategoryId(categoryid){

    }

    static Update(product){


    }
    static DeleteById(id){

    }
}   
