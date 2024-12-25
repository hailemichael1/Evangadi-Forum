const mysql2 = require("mysql2");
require("dotenv").config()
const dbConnection = mysql2.createPool({
  // user: process.env.USER,
  "user":"evangadi-admin",
  database: process.env.DATABASE,
  host: process.env.HOST,
  password: process.env.PASSWORD,
  connectionLimit: 10,
   socketPath: "/Applications/MAMP/tmp/mysql/mysql.sock"

});





 module.exports = dbConnection.promise();
