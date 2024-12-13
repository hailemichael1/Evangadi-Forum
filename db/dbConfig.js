const mysql = require("mysql2");
const dbconnection = mysql.createPool({
  user: "habtamu",
  database: "db_evangadi_forum",
  host: "localhost",
  password: "123456",
  connectionLimit: 10,
});
// dbconnection.execute("select 'test'", (err, res) => {
//   if (err) {
//     console.log(err.message);
//   } else {
//     console.log(res);
//   }
// });

module.exports = dbconnection.promise();
