// Import the mysql2 library
const mysql = require('mysql2');

const dotenv = require('dotenv');

dotenv.config({ path: './../.env' });
// Create a connection to the database
const connection = mysql.createConnection({
  user: 'evangadi-admin',
  database: process.env.DATABASE,
  host: process.env.HOST,
  password: process.env.PASSWORD,
});

// Connect to the database
connection.connect((err) => {
  if (err) {
    console.error('Error connecting to the database:', err);
    return;
  }
  console.log('Connected to the database.');

  // Create the `users` table
  const createUsersTable = `
    CREATE TABLE IF NOT EXISTS users (
      userid INT(20) NOT NULL AUTO_INCREMENT,
      username VARCHAR(20) NOT NULL,
      firstname VARCHAR(20) NOT NULL,
      lastname VARCHAR(20) NOT NULL,
      email VARCHAR(40) NOT NULL,
      password VARCHAR(100) NOT NULL,
      PRIMARY KEY (userid)
    );
  `;

  connection.query(createUsersTable, (err) => {
    if (err) {
      console.error('Error creating users table:', err);
      return;
    }
    console.log('Users table created.');

    // Create the `questions` table
    const createQuestionsTable = `
      CREATE TABLE IF NOT EXISTS questions (
        id INT(20) NOT NULL AUTO_INCREMENT,
        questionid VARCHAR(100) NOT NULL UNIQUE,
        userid INT(20) NOT NULL,
        title VARCHAR(50) NOT NULL,
        description VARCHAR(200) NOT NULL,
        tag VARCHAR(20),
        PRIMARY KEY (id, questionid),
        FOREIGN KEY (userid) REFERENCES users(userid)
      );
    `;

    connection.query(createQuestionsTable, (err) => {
      if (err) {
        console.error('Error creating questions table:', err);
        return;
      }
      console.log('Questions table created.');

      // Create the `answers` table
      const createAnswersTable = `
        CREATE TABLE IF NOT EXISTS answers (
          answerid INT(20) NOT NULL AUTO_INCREMENT,
          userid INT(20) NOT NULL,
          questionid VARCHAR(100) NOT NULL,
          answer VARCHAR(200) NOT NULL,
          PRIMARY KEY (answerid),
          FOREIGN KEY (questionid) REFERENCES questions(questionid),
          FOREIGN KEY (userid) REFERENCES users(userid)
        );
      `;

      connection.query(createAnswersTable, (err) => {
        if (err) {
          console.error('Error creating answers table:', err);
          return;
        }
        console.log('Answers table created.');

        // Close the connection
        connection.end((err) => {
          if (err) {
            console.error('Error closing the connection:', err);
            return;
          }
          console.log('Connection closed.');
        });
      });
    });
  });
});
