import { useContext, useState } from "react";
import { AppState } from "../../App";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { FaCircle } from "react-icons/fa"; // Use FaCircle for bullet point
import "./NewQuestion.css";
import axios from "../../axiosConfig";

const NewQuestion = () => {
  const { user, headerToken } = useContext(AppState);
  const [form, setForm] = useState({
    userid: user?.userid,
    title: "",
    description: "",
  });
  // console.log(form);

  // const token = localStorage.getItem("token");
  const navigate = useNavigate();

  // const axios = axiosBase();

  const handleChange = (e) => {
    setForm((pre) => ({ ...pre, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!user || !user?.userid) {
      console.log("User ID is null");
      return;
    }

    try {
      await axios.post("/questions/post-question", form, { ...headerToken });

      navigate("/all-questions");
    } catch (error) {
      console.log(error.response);
    }
  };

  return (
    <div className="container">
      <div className="container_header">
        <h3 className="step">Steps to write a good question</h3>
        <ul className="list">
          <li>
            <span>
              <FaCircle className="px-1" />
              {/* Use FaCircle for bullet point */}
            </span>
            Summarize your question in a one-line title.
          </li>
          <li>
            <span>
              <FaCircle className="px-1" />
            </span>
            Describe your problem in more detail.
          </li>
          <li>
            <span>
              <FaCircle className="px-1" />
            </span>
            Describe what you tried and what you expected to happen.
          </li>
          <li>
            <span>
              <FaCircle className="px-1" />
            </span>
            Review your question and post it to the site.
          </li>
        </ul>
      </div>

      <div className="inputs">
        <div className="input_description ">
          <h3>Ask a public question</h3>
          <div className="mb-3">
            <Link className="li" to="/all-questions">
              Go to Question Page
            </Link>
          </div>
        </div>

        <form className="box_input" onSubmit={handleSubmit}>
          <div>
            <input
              className="input_text_title input_text_one"
              type="text"
              name="title"
              placeholder="Title"
              value={form.title}
              onChange={handleChange}
              required
            />
          </div>

          <div>
            <textarea
              className="input_text_text input_text_one"
              maxLength="255"
              type="text"
              name="description"
              placeholder="Question Description..."
              value={form.description}
              onChange={handleChange}
              required
            />
          </div>

          <div className="">
            <button className="btn btn-lg btn-primary mb-4" type="submit">
              Post Your Question
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default NewQuestion;
