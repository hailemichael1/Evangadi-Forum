const express = require("express");
const app = express();
const port = 5500;


// middle wire to read json data

app.use(express.json())

// db connection
const dbconnection = require("./db/dbConfig");
// user routes middleware file

const userRouter = require("./routes/userRoute");

// user routes middleware

app.use("/api/users", userRouter);

async function start() {
  try {
    const result = await dbconnection.execute("select 'test' ");
    app.listen(port);
    console.log("data base connection established");
    console.log(`Listening @ ${port}`);
  } catch (error) {
    console.log(error.message);
  }
}
start();
