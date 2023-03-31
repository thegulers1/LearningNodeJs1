const sequelize = require('../utility/database'); 
const Sequelize = require('sequelize')
const Category = sequelize.define('category',{

    id : {
        type  :Sequelize.INTEGER,
        autoIncrement : true,
        allowNull:false,
        primaryKey : true
         },
    name: {
        type : Sequelize.STRING
    } ,
    description:{
        type:Sequelize.STRING,
        allowNull:true
    }


});
module.exports = Category

// const connection = require('../utility/database');  
// module.exports = class Category{
//     constructor(name, description){
//         this.name = name;
//         this.description = description;
//     }
//     async saveCategory(){
//         const pool = await connection();
//         const insert =await pool.query `insert into category(name,description) values(${this.name},${this.description})`
//         return insert  
//      }
//     static async  getAll(){
//         const pool = await connection();
//         const {recordset} = await pool.query("select * from category")
//         return recordset
//      }
//     static async getById(id){
//         const pool = await connection();
//         const {recordset}= await pool.query `select * from category where id = ${id}`
//         return recordset    
//      }
//     static async update(category){
//         const pool = await connection();
//         const {update} = await pool.query `update category set name = ${category.name},description = ${category.description} where id = ${category.id}`
//         return update
//     }
//     static async deleteById(category){
//         const pool = await connection();
//         const {deleted} = await pool.query `delete from category where id = ${id}`
//         return deleted 
//     }
// } 