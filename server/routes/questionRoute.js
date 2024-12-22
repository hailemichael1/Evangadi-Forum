const express = require("express");
// const {
//   askQuestion,
//   getAllQuestions,
//   getSingleQuestion,
// } = require("../controller/questionController");
const {
  askQuestion,
  getAllQuestions,
  getSingleQuestion,
  deleteQuestion,
} = require("../controller/questionController");
// const authMiddleware = require("../middleware/authMiddleware");
const router = express.Router();

// Post a new question
router.post("/", askQuestion);

// Get all questions
router.get("/", getAllQuestions);

// Get a single question by ID
router.get("/:questionid", getSingleQuestion);

// Delete a single question
router.delete("/:questionid", deleteQuestion);
module.exports = router; 
