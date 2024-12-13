const express = require("express");
const app = express();
const port = 7001;

//user routes midleware file
const userRoutes = require("./routes/userRouter");
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

app.listen(port, (err) => {
  if (err) {
    console.log(err.message);
  } else {
    console.log(`listening on ${port}`);
  }
});
