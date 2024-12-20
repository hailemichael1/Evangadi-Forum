const express = require('express');
const {
  postAnswer,
  getAnswersForQuestion,
} = require('../controller/answerController');
const authMiddleware = require('../middleware/authMiddleware');
const router = express.Router();

// Post an answer for a specific question
router.post('/', postAnswer);

// Get all answers for a specific question
router.get('/:question_id', getAnswersForQuestion);

module.exports = router;
