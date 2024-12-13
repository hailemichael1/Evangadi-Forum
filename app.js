const express = require("express");
const app = express();
const port = 7001;
// db connection
const dbConnection = require("./db/dbConfig");
//user routes midleware file
const userRoutes = require("./routes/userRouter");
//json midleware
app.use(express.json());
//user route midleware
app.use("/api/users", userRoutes);
// //questions route midleware
// const questionRoutes = require("./routes/questionRouter");
// // question route midleware
// app.use("api/questions",questionRoutes)
// //answer route midleware
// const answerRoute = require("./routes/answerRouter");
// // question route midleware
// app.use("api/answers", answerRoute);
async function start() {
  try {
    const result = await dbConnection.execute("select 'test'");
    app.listen(port);
    console.log("databse connection established");
    console.log(`listening on ${port}`);
  } catch (err) {
    console.log(err.message);
  }
}
start();
