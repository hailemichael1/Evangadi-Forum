const express = require("express");
const app = express();
const port = 3500;


// db connection
const dbConnection = require("./db/dbConfig");

// authorization middleware
const authMiddleware = require("./middleware/authMiddleware");

// user route middleware file
const UserRoutes = require("./routes/userRoute");

// question routes middleware file
const questionsRoutes = require("./routes/questionRoute");

// answer routes middleware file
const answersRoutes = require("./routes/answerRoute");

// JSON middleware to parse incoming request bodies as JSON
app.use(express.json());

// user routes middleware
app.use("/api/users", UserRoutes);

// question routes middleware (authMiddleware only applied to POST routes)

app.use("/api/questions", authMiddleware, questionsRoutes);

// answer routes middleware (authMiddleware only applied to POST routes)

app.use("/api/answers", authMiddleware, answersRoutes);

async function start() {
  try {
    // Test database connection (use an actual valid query here)
    const [rows, fields] = await dbConnection.execute("SELECT 1 + 1 AS result");
    if (rows[0].result === 2) {
      console.log("Database connection successful");
    }

    // Start the server
    app.listen(port, () => {
      console.log(`Server is listening on port ${port}`);
    });
  } catch (error) {
    console.error("Error connecting to the database:", error.message);
  }
}

start();





