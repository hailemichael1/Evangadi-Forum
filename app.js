const dotenv = require ('dotenv');
      dotenv.config()
const express = require("express");
const mysql2 = require ("mysql2");
const db = require ("./db/dbConfig")
const userRoute = require ("./routes/userRoute")


const app = express();
const port = 5500;

app.use(express.json());
app.use('/api/users', userRoute);



async function start() {
    try {
 const result = await db.execute ("select 'test' ");

 await app.listen(port);
 console.log(`listening on ${port}`)
 console.log('db connected');
    } catch (error) {
        console.log(error.message)
    }
}
start();


