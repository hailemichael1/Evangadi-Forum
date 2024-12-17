import { card } from './QuestionCard.module.css';
import { BsArrowRight } from 'react-icons/bs';
function QuestionCard(Questions) {
  console.log(JSON.stringify(Questions, null, 2));
  return (
    <div className={card}>
      <div>
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWpfPWgt9O-1jZaIlxyoG-gz3sGQWT7LYMMw&s"
          alt=""
        />

        <p>username</p>
      </div>
      <p>{Questions.Questions.title}</p>
      <BsArrowRight />
    </div>
  );
}
export default QuestionCard;
