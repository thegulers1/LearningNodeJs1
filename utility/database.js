/*const sql = require('mssql')
var config = {
  server: "MSG-70",
  database: "Movies",
  driver: "msnodesqlv8",
  user:"sa",
  password:"1234",
  options: {
    trustedConnection: true,
    trustServerCertificate: true,
    enableArithAbort: true   
 }
}
const dbConn = async () => {
    try {
     const pool = await sql.connect(config)
      return pool
    } catch (err) {
      console.log(err)
    }
   }
 

module.exports = dbConn*/

const Sequelize = require("sequelize")
const sequelize = new Sequelize('Movies','sa','1234',{
  dialect: 'mssql',
  host :'MSG-70'
});
module.exports = sequelize;

// const Sequelize = require("sequelize")
// const sequelize = new Sequelize('TEST_DB','sa','1234',{
//   dialect: 'mssql',
//   host :'DESKTOP-CQ978ES'
// });
// module.exports = sequelize;