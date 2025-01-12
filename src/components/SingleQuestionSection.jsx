import React, {useState} from 'react'
import retrieveData from '../utils/retrieveData';
import McqQuesstionCard from './McqQuesstionCard';

const SingleQuestionSection = ({totalQuestion, timeLimit}) => {
  const [questions, setQuestions] = useState(retrieveData(totalQuestion));
  const [currentIndex, setCurrentIndex] = React.useState(0);
  const [selectedOption, setSelectedOption] = React.useState('');

  const currentQuestion = questions[currentIndex];

  const handleRadioChange = (e) => {
    questions[currentIndex].answerSelected = e.target.value;
    setCurrentIndex(currentIndex + 1);
  }
  return (
    <div className=''>
      {
        currentIndex === questions.length ?
        <div>Result</div>
        :
        <McqQuesstionCard 
          currentIndex={currentIndex} 
          handleRadioChange={handleRadioChange}
          currentQuestion={currentQuestion}
        />
      }
    </div>
  )
}

export default SingleQuestionSection