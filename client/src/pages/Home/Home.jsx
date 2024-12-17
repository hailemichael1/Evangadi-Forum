import { useEffect, useState } from 'react';
import './Home.css';
import QuestionCard from './../../Components/QuestionCard/QuestionCard';

//main home page
function Home() {
  const [searchQuery, setSearchQuery] = useState('');
  const user = { username: 'ademkei2@KJL.COM', id: 4 };
  const [allQuestions, setAllQuestions] = useState([
    {
      questionid: 'q1',
      title: 'What is HTML?',
      description: 'Can someone explain what HTML is used for?',
      userid: 1,
    },
    {
      questionid: 'q2',
      title: 'CSS Styling Help',
      description: 'How can I center a div in CSS?',
      userid: 2,
    },
    {
      questionid: 'q3',
      title: 'JavaScript Functions',
      description: 'How do functions work in JavaScript?',
      userid: 3,
    },
    {
      questionid: 'q4',
      title: 'SQL Joins',
      description: 'What are the different types of joins in SQL?',
      userid: 1,
    },
    {
      questionid: 'q5',
      title: 'Node.js Basics',
      description: 'How do I start a basic server with Node.js?',
      userid: 2,
    },
  ]);

  console.log(user);

  //   useEffect(() => {
  //     const fetchQuestions = async () => {
  //       try {
  //         const allQuestion = await axios.get('/question');
  //         setAllQuestions(allQuestion.data);
  //       } catch (error) {
  //         console.error(error);
  //       }
  //     };

  //     fetchQuestions();
  //   }, [user]);
  const filteredQuestion = allQuestions.filter((question) =>
    question.title.toLowerCase().includes(searchQuery.toLowerCase())
  );
  console.log('filteredQuestion', filteredQuestion);

  return (
    <div className="home__container__wrap">
      <section className="home_container">
        {/* button container for asking questions and welcoming the user  */}
        <div className="btn_container">
          <a>
            {/* link for ask question button  */}
            <button className="ask_blue">Ask Question</button>
          </a>
          <p>
            welcome: <span>{user.username}</span>
            {/* greeting the username  */}
          </p>
        </div>
        {/* search input for questions  */}
        <div className="search_container">
          <input
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            type="text"
            placeholder="Search question"
          />
        </div>
        {/* horizontal separate line  */}
        <div className="home__QuestionCard_box">
          <div className="horizontal_line">
            <hr />
          </div>

          {/* user details section  */}
          {filteredQuestion.length > 0 ? (
            filteredQuestion.map((question, i) => (
              <QuestionCard key={i} Questions={question} />
            ))
          ) : (
            <p>No Question Found</p>
          )}
        </div>
      </section>
    </div>
  );
}

export default Home;
