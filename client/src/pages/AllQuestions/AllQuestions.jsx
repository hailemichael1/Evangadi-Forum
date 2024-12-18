import React, { useContext, useEffect, useState } from "react";
import { AppState } from "../../App";
import axiosBase from "../../axiosConfig";
import { useNavigate } from "react-router-dom";
import "./AllQuestions.css";

function Homepage() {
  const { user } = useContext(AppState);
  const [questions, setQuestions] = useState([]);
  const [search] = useState("");
  const [filteredQuestions, setFilteredQuestions] = useState([]);
  const navigate = useNavigate();

  const handleclick = () => {
    navigate("/question");
  };

  // console.log(user);

  const allQuestions = async () => {
    try {
      const data = await axiosBase.get("/questions/all-questions", {
        params: { userid: user.userid },
      });

      //   we suse prams to filter the user id from the database by connecting with the end point
      setQuestions(data?.data?.allQuestion);
    } catch (error) {
      console.log(error.response);
    }
  };

  useEffect(() => {
    allQuestions();
  }, []);

  useEffect(() => {
    setFilteredQuestions(
      questions.filter((q) =>
        q.title.toLowerCase().includes(search.toLowerCase())
      )
    );
  }, [search, questions]);

  return (
    <div className="container">
      <div className="homp ">
        <div className=" hed ">
          <div className="row askque">
            <div className="col-md-6   ">
              <button className="qb   " onClick={handleclick}>
                Ask Question
              </button>
            </div>
            <div className="col-md-6 ">
              <h4 className="wel  text-md-end">
                Welcome: {user && user.username}
              </h4>
            </div>
          </div>
        </div>
        <h3 className="ns">Questions</h3>
      </div>
      <div>
        <div>
          {filteredQuestions.map((question, i) => (
            <QuestionDetail question={question} key={i} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Homepage;
