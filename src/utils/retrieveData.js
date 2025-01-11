import qustionsArr from "../data/algebraQuestions";

//Wrong questions finder
// qustionsArr.forEach((question, index) => {
//   if(!question.option.includes(question.answer[0])){
//     console.log(question.id);
//   }
// });

const retrieveData = () => {
  let count = 0;
  const numberOfQuestions = 15;
  const number = new Set();
  const testQuestions = [];

  while(count < numberOfQuestions){
    const randomNum = Math.floor(Math.random() * qustionsArr.length );
    number.add(randomNum);
    count = number.size;
  }
  number.forEach(num => testQuestions.push(qustionsArr[num]));
  return testQuestions;
}

export default retrieveData;