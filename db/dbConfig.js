const mysql2 = require('mysql2');

const dbConnection = mysql2.createPool({
    user: "evangadi-admin",  
    password: "Abc142895",  
    database: "evangadi-db", 
    host: "localhost",
    connectionLimit: 10
  });
  
  // Test the connection
  // dbConnection.execute("SELECT 'test'", (err, result) => {
  //   if (err) {
  //     console.error("Error connecting to the database:", err.message);
  //   } else {
  //     console.log("Connection successful:", result);
  //   }
  // });

module.exports=dbConnection.promise()