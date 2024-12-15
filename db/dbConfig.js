const mysql2 = require("mysql2");
const dbConnection = mysql2.createPool({
<<<<<<< HEAD
  user: process.env.USER,
  database: process.env.DB,
=======
  user: "evangadi-admin",
  database: "evangadi_forum",
>>>>>>> cc28bd70d4c570e8911264e4eeb061c1a448dbf6
  host: "localhost",
  password: process.env.PASSWORD,
  connectionLimit: 10,
});

// dbConnection.execute("select 'test'", (err, result) => {
//   if (err) {
//     console.log(err.message);
//   } else {
//     console.log(result);
//   }
// });

module.exports = dbConnection.promise();

 module.exports = dbConnection.promise();

