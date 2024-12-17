function QuestionCard(Questions) {
  console.log(JSON.stringify(Questions, null, 2));
  return (
    <div>
      <p>{Questions.Questions.title}</p>
      <p>{Questions.Questions.description}</p>
    </div>
  );
}
// { questionid: "q3", title: "JavaScript Functions", description: "How do functions work in JavaScript?", … }
export default QuestionCard;
