const sequelize = require('../utility/database'); 
const Sequelize = require('sequelize')

const Category  = require('./category')
const Product  = require('./product')
  
//   // Define the association between Product and Category
//   Product.belongsTo(Category, { foreignKey: 'categoryid' });
  
//   // Query the products with their associated category name
// Product.findAll({
//     include: {
//       model: Category,
//       attributes: ['name'],
//     },
//   }).then(s => console.log(s[0].dataValues))
 
async function myFunction() {
    const [results, metadata] = await sequelize.query(
        "select * from vProduct")
        console.log(JSON.stringify(results, null, 2));
  }


myFunction()
