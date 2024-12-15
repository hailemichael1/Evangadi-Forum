// const express = require("express");
// const router = express.Router();
// const { postAnswer, allAnswers, singleAnswer } = require("../controller/answerController");

// const authMiddleware = require("../middleware/authMiddleware");

// // POST route for posting an answer (requires authentication)
// router.post("/post-answers", authMiddleware, postAnswer);

// // GET route for all answers to a question
// router.get("/all-answers", allAnswers);

// // GET route for a single answer
// router.get("/single-answer/:answerid", singleAnswer);

// module.exports = router;

const express = require("express");
const router = express.Router();
const { postAnswer, allAnswers, singleAnswer } = require("../controller/answerController");
const authMiddleware = require("../middleware/authMiddleware");

// POST route for posting an answer (authentication required)
router.post("/", authMiddleware, postAnswer);

// GET route for fetching all answers to a question
router.get("/question/:questionid", allAnswers);  // Use 'questionid' as param

// GET route for fetching a single answer by ID
router.get("/:answerid", singleAnswer);  // Use 'answerid' as param

module.exports = router;
