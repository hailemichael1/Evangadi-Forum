

const express = require('express');
const app = express();
const port = 3500;
// db connection
const dbConnection = require('./db/dbConfig')

// Import user routes
const userRoutes = require("./routes/userRoute");
// questions routes middlewre file
const  questionsRoutes = require("./routes/questionRoute")

// json middleware to exract json data
app.use(express.json())

app.use("/api/users", userRoutes);
app.use("api/questions",questionsRoutes)


 async function start (){
    try {
        const result= await dbConnection.execute("SELECT 'test'")
        await app.listen(port)
        console.log("database connection established")
        console.log(`listening on ${port}`)
      
      }catch (error){
          console.log(error.message)
      
      }

 }
 start();





    

