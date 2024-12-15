const mysql2= require("mysql2")



const db = mysql2.createPool({
    user:process.env.DB_USER,
    host:"localhost",
    password:  process.env.PASSWORD ,
    database:process.env.DATABASE  ,
    connectionLimit:10
});


module.exports =db.promise();