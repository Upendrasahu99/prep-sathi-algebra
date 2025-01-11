import React from 'react'
import Result from './Result.jsx'

const McqBox = ({testQuestionArr}) => {
  const [currentIndex, setCurrentIndex] = React.useState(0);
  const [selectedOption, setSelectedOption] = React.useState('');

  const currentQuestion = testQuestionArr[currentIndex];

  const handleRadioChange = (e) => {
    testQuestionArr[currentIndex].answerSelected = e.target.value;
    setCurrentIndex(currentIndex + 1);
  }
  return (
    <div className=''>
      {
        currentIndex === testQuestionArr.length ?
        <Result testQuestionArr={testQuestionArr} />
        :
        <div className="card bg-base-100 w-96 shadow-xl mx-auto">
          <div className="card-body flex flex-col gap-5">
            <p>{currentIndex + 1}. {currentQuestion.questionHindi}</p>
            <ol className='grid grid-cols-2 gap-5 justify-center'>
              <li className='flex items-center gap-2'>
                <input 
                  type="radio" 
                  name="radio-1" 
                  className="radio" 
                  id='option1' 
                  value={currentQuestion.option[0]} 
                  onChange={handleRadioChange}
                  checked={selectedOption === currentQuestion.option[0]}
                /> 
                <label htmlFor="option1">{currentQuestion.option[0]}</label>
              </li>
              <li className='flex items-center gap-2'>
                <input 
                  type="radio" 
                  name="radio-1" 
                  className="radio" 
                  id='option2' 
                  value={currentQuestion.option[1]} 
                  onChange={handleRadioChange}
                  checked={selectedOption === currentQuestion.option[1]}
                />
                <label htmlFor="option2">{currentQuestion.option[1]}</label>
              </li>
              <li className='flex items-center gap-2'>
                <input 
                  type="radio" 
                  name="radio-1" 
                  className="radio" 
                  id='option3' 
                  value={currentQuestion.option[2]} 
                  onChange={handleRadioChange}
                  checked={selectedOption === currentQuestion.option[2]}
                /> 
                <label htmlFor="option3">{currentQuestion.option[2]}</label>
              </li>
              <li className='flex items-center gap-2'>
                <input 
                  type="radio" 
                  name="radio-1" 
                  className="radio" 
                  id='option4' 
                  value={currentQuestion.option[3]} 
                  onChange={handleRadioChange}
                  checked={selectedOption === currentQuestion.option[3]}
                /> 
                <label htmlFor="option4">{currentQuestion.option[3]}</label>
              </li>
            </ol>
          </div>
        </div>
      }
    </div>
  )
}

export default McqBox