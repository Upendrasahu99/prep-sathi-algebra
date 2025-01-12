import React, { useState, useContext } from 'react';
import retrieveData from '../utils/retrieveData';
import McqQuesstionCard from './McqQuesstionCard';
import { AppContext } from '../context/AppContextProvider';

const AllQuestionSection = () => {
  const [questions, setQuestions] = useState(retrieveData(20));
  const {setTestMode, setResultData} = useContext(AppContext);


  return (
    <div className='flex flex-col gap-5'>
      {
        questions.map((data, index) =>{
          const handleRadioChange = (e) => {
            questions[index].answerSelected = e.target.value;
            console.log(questions);
            if(index === questions.length - 1){
              setResultData(questions);
              setTestMode('result');
            }
          }
          return (
            <McqQuesstionCard 
              key={index}
              currentIndex={index} 
              handleRadioChange={handleRadioChange}
              currentQuestion={data}
              timeLimit={60}
              handleTimeEnd={() => {}}
            />
          )
        })
      }
    </div>
  )
}

export default AllQuestionSection