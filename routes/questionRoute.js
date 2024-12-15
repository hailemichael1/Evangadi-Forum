// // // routes/questionRoute.js
// // const express = require("express");
// // const router = express.Router();
// // const {
// //   postQuestions,
// //   allQuestions,
// //   singleQuestion,
// // } = require("../controller/questionController"); // Correct path without space

// // const authMiddleware = require("../middleware/authMiddleware");

// // // post question route (with authMiddleware applied)
// // router.post("/post-questions", authMiddleware, postQuestions);

// // // all questions route
// // router.get("/all-questions", allQuestions);

// // // single question route
// // router.get("/single-question/:questionid", singleQuestion);

// // module.exports = router;



// // routes/questionRoute.js
// const express = require("express");
// const router = express.Router();
// const { postQuestions, allQuestions, singleQuestion } = require("../controller/questionController");

// // POST route for creating a new question
// router.post("/questions", postQuestions); 

// // GET route for fetching all questions
// router.get("/questions", allQuestions); 

// // GET route for fetching a single question by ID
// router.get("/questions/:questionid", singleQuestion);

// module.exports = router;
const express = require("express");
const router = express.Router();

// Import question controller functions
const { postQuestions, allQuestions, singleQuestion } = require("../controller/questionController");

// authentication middleware
const authMiddleware = require("../middleware/authMiddleware");

// POST route for creating a new question
router.post("/", authMiddleware, postQuestions);  // Auth only for POST

// GET route for fetching all questions
router.get("/", allQuestions);  // No auth needed for GET

// GET route for fetching a single question by ID
router.get("/:questionid", singleQuestion);

module.exports = router;

