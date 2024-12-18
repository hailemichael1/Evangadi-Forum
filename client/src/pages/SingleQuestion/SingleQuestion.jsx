import React, { useEffect, useState } from "react";
import "./SingleQuestion.css";
import axiosBase from "../../axiosConfig";
import { useParams } from "react-router-dom";
import Answer from "../../pages/Answer/Answer";
import "../../pages/QuestionDetail/QuestionDetail.css";
import AllAnswers from "../Answer/AllAnswers";

function SingleQuestion() {
  const { questionid } = useParams();
  const [question, setQuestion] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const { data } = await axiosBase?.get(
          `/questions/question/${questionid}`
        );
        console.log(data);
        console.log(questionid);
        setQuestion(data[0]);
      } catch (error) {
        console.log(error.response);
      }
    })();
  }, [questionid]);
  console.log();
  return (
    <>
      <div className="header_question ">
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <div className="question_user">
          <h1 className="question">Question</h1>
          <br />
          <br />
          <br />
          <br />
          <br />
          <div className="username">{question?.username}</div>
        </div>
        <div className="question_title">
          <div className="question_content">{question?.title}</div>
          <p className="question_description">{question?.description}</p>
          <div className="question_arrow"></div>
        </div>
      </div>
      <Answer questionid={questionid} />
      <AllAnswers questionid={questionid} />
    </>
  );
}

export default SingleQuestion;
