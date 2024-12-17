const express = require("express");
const route = express.Router();
const {StatusCodes} = require("http-status-codes");
const {createQuestion, singleQuestion, allQuestion} = require ("../controller/questionController")

//post question 
route.post("/", createQuestion)

//get single question 
route.get("/:questionid", singleQuestion)

//get all question 
route.get("/", allQuestion)


module.exports = route;