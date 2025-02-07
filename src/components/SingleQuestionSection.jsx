import React, {useState, useContext} from 'react'
import retrieveData from '../utils/retrieveData';
import McqQuesstionCard from './McqQuesstionCard';
import { AppContext } from '../context/AppContextProvider';
import SecondCountDown from './SecondCountDown';

const SingleQuestionSection = ({totalQuestion, timeLimit}) => {
  const [questions, setQuestions] = useState(retrieveData(totalQuestion));
  const [currentIndex, setCurrentIndex] = React.useState(0);
  const [selectedOption, setSelectedOption] = React.useState('');
  const {setTestMode, setResultData} = useContext(AppContext);

  const currentQuestion = questions[currentIndex];

  const handleRadioChange = (e) => {
    questions[currentIndex].answerSelected = e.target.value;
    console.log(questions);
    if(currentIndex === questions.length - 1){
      setResultData(questions);
      setTestMode('result');
    }
    setCurrentIndex(currentIndex + 1);
  }

  const handleTimeEnd = () => {
    questions[currentIndex].answerSelected = "";
    if(currentIndex === questions.length - 1){
      setResultData(questions);
      setTestMode('result');
    }
    setCurrentIndex(currentIndex + 1);
  }

  return (
    <div>
      <McqQuesstionCard 
        currentIndex={currentIndex} 
        handleRadioChange={handleRadioChange}
        currentQuestion={currentQuestion}
        timeLimit={timeLimit}
        handleTimeEnd={handleTimeEnd}
      />
    </div>
  )
}

export default SingleQuestionSection