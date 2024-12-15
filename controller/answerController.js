

// // controller/answerController.js

// const postAnswers = (req, res) => {
//   const { questionId, answerText } = req.body;

//   if (!questionId || !answerText) {
//     return res.status(400).json({ msg: "Both questionId and answerText are required" });
//   }

//   // Logic to post an answer to the database
//   // (In this example, we just return a response)
//   res.status(201).json({ msg: "Answer posted successfully" });
// };

// const allAnswers = (req, res) => {
//   // Fetch answers from the database
//   res.json({ msg: "Here are all the answers" });
// };

// const singleAnswer = (req, res) => {
//   const { answerid } = req.params;
//   // Fetch a single answer from the database based on answerid
//   res.json({ msg: `Answer with ID: ${answerid}` });
// };

// // Export the functions
// module.exports = {
//   postAnswers,
//   allAnswers,
//   singleAnswer
// };



// answerController.js

const { StatusCodes } = require("http-status-codes");
const dbConnection = require("../db/dbConfig");

// POST a new answer to a specific question
async function postAnswer(req, res) {
  const { answer, questionid } = req.body;
  const userid = req.user.userid; // Assuming the authMiddleware adds the user

  if (!answer || !questionid) {
    return res.status(StatusCodes.BAD_REQUEST).json({ msg: "Answer and question ID are required." });
  }

  try {
    const query = "INSERT INTO answers (userid, questionid, answer) VALUES (?, ?, ?)";
    await dbConnection.query(query, [userid, questionid, answer]);
    return res.status(StatusCodes.CREATED).json({ msg: "Answer posted successfully" });
  } catch (error) {
    console.error(error.message);
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ msg: "Error posting the answer" });
  }
}

// GET all answers for a specific question
async function allAnswers(req, res) {
  const { questionid } = req.params;

  try {
    const [answers] = await dbConnection.query("SELECT * FROM answers WHERE questionid = ?", [questionid]);
    if (answers.length === 0) {
      return res.status(StatusCodes.NOT_FOUND).json({ msg: "No answers found for this question" });
    }
    return res.status(StatusCodes.OK).json({ answers });
  } catch (error) {
    console.error(error.message);
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ msg: "Error fetching answers" });
  }
}

// GET a single answer by its ID
async function singleAnswer(req, res) {
  const { answerid } = req.params;

  try {
    const [answer] = await dbConnection.query("SELECT * FROM answers WHERE answerid = ?", [answerid]);
    if (answer.length === 0) {
      return res.status(StatusCodes.NOT_FOUND).json({ msg: "Answer not found" });
    }
    return res.status(StatusCodes.OK).json({ answer: answer[0] });
  } catch (error) {
    console.error(error.message);
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ msg: "Error fetching answer" });
  }
}

module.exports = { postAnswer, allAnswers, singleAnswer };
