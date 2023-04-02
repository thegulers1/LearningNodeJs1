const sequelize = require('../utility/database'); 
const Sequelize = require('sequelize')

const Product = sequelize.define('product', {
    id : {
        type  :Sequelize.INTEGER,
        autoIncrement : true,
        allowNull:false,
        primaryKey : true
         },
    name: {
        type : Sequelize.STRING
    },
    price: {
            type: Sequelize.DOUBLE,
            allowNull:false
    },
    imageUrl:{
        type : Sequelize.STRING,
        allowNull :false
    },
    description:{
        type:Sequelize.STRING,
        allowNull:true
    },
    categoryid : {
        type  :Sequelize.INTEGER
         },

});

module.exports = Product


// const { getById } = require('./category');



// module.exports = class Product{
//     constructor(name,price,image,description,categoryid){      
//         this.name = name;
//         this.price = price;
//         this.image = image;
//         this.description = description;
//         this.categoryid = categoryid;
        
//     }  
//     async saveProduct(){
//         const pool = await connection();
//         const insert =await pool.query `insert into product(name,description,price,image,categoryid) values(${this.name},${this.description},${this.price},${this.image},${this.categoryid})`
//         return insert     
//     }
    
//     static async getAll() {
//         const pool = await connection();
//         const {recordset} =await pool.query("select * from product")
//         return recordset
//     }
 
//     static async getById(id){
//         const pool = await connection();
//         const {recordset}= await pool.query `select * from product where id = ${id}`
//         return recordset     
//      }

//     static getProductsByCategoryId(categoryid){

//     }

//     static async Update(product){
//         const pool = await connection();
//         const {update} = await pool.query `update product set name = ${product.name},description = ${product.description},price = ${product.price},image = ${product.image},categoryid = ${product.categoryid} where id = ${product.id}`
//         return update
//         }

//     static async DeleteById(id){
//         const pool = await connection();
//         const {deleted} = await pool.query `delete from product where id = ${id}`
//         return deleted
//     }

// }   
 