const mysql2 = require('mysql2');

// Set up the database connection pool
const dbConnection = mysql2.createPool({
  host: 'localhost',
  user: 'evangadi-admin',
  password: 'Helen142895',
  socketPath: '/Applications/MAMP/tmp/mysql/mysql.sock',
  database: 'evangadi-db'
});

// dbConnection.execute("select 'test'", (err, result) => {
//   if (err) {
//     console.log(err.message);
//   } else {
//     console.log(result);
//   }
// });
 module.exports = dbConnection.promise();