const sql = require('mssql')
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
 

module.exports = dbConn
