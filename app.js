const express = require("express");
const app = express();
const port = 5500;
const { register } = require("./controller/userController");

// db connection
const dbConnection = require("./db/dbConfig");

// user routes middleware file

const userRoutes = require("./routes/userRoute");
// jason middleware to extract file

app.use(express.json());
// user routes middleware

app.use("/api/users", userRoutes);

// questions routes middleware??

// questions routes middleware??

async function start() {
  try {
    const result = await dbConnection.execute("select 'test'");
    await app.listen(port);
    console.log("database connection established");
    console.log(`listening on ${port}`);
  } catch (err) {
    console.log(err.message); // Log the error message
  }
}

start();
