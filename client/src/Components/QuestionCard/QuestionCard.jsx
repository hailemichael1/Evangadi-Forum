import { card } from './QuestionCard.module.css';
import { BsArrowRight } from 'react-icons/bs';
function QuestionCard(Questions) {
  return (
    <div className={card}>
      <div>
        {/*  */}
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWpfPWgt9O-1jZaIlxyoG-gz3sGQWT7LYMMw&s"
          alt=""
        />
        {/* ADD USER NAME DYNAMICALLY */}
        <p>username</p>
      </div>
      <p>{Questions.Questions.title}</p>
      <BsArrowRight />
    </div>
  );
}
export default QuestionCard;
