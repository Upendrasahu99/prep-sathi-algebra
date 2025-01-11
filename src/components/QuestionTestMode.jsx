import React, { useState } from 'react'
import SelectData from './SelectData'
import SingleQuestionSection from './SingleQuestionSection'

const QuestionTestMode = () => {
  const [startTest, setStartTest] = useState(false)
  const [totalQuestion, setTotalQuestion] = useState(0);
  const [timeLimit, setTimeLimit] = useState(0);
  const enableStartButton = totalQuestion === 0 && timeLimit === 0;

  const timeLimitOptions = [30,40,50,60,70,80,90,100,120];
  const totalQuestionOptions = [5, 10, 15, 20, 25, 30, 35, 40, 45, 50];

  const handalSelectTotalQuestion = (data)=>{
    setTotalQuestion(data);
  }

  const handleSelectTimeLimit = (data) => {
    setTimeLimit(data)
  }

  return (
    <div>
      {
        startTest ?
        <SingleQuestionSection totalQuestion={totalQuestion} timeLimit={timeLimit}/>
        :
        <div className='flex flex-col gap-5'>
          <SelectData 
            label={'Per-Question Time Limit'} 
            options={timeLimitOptions} 
            optionSuffix={'sec'}
            handleChange = {handleSelectTimeLimit}
          />
          <SelectData 
            label={'Select Number of Questions'} 
            options={totalQuestionOptions} 
            optionSuffix={''}
            handleChange = {handalSelectTotalQuestion}
          />
          <button className="btn sm:btn-sm md:btn-md" onClick={() => {setStartTest(true)}} disabled={enableStartButton}>Start Test</button>
        </div>
      }
    </div>
  )
}

export default QuestionTestMode