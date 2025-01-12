import React from 'react'

const McqQuesstionCard = ({currentIndex, handleRadioChange, currentQuestion}) => {
  return (
    <div className="card bg-base-100 w-96 shadow-xl mx-auto">
    <div className="card-body flex flex-col gap-5">
      <p>
        <span className="badge badge-neutral me-2">{currentIndex + 1}.</span>{currentQuestion.questionHindi}
      </p>
      <p>
        <span className="badge badge-neutral me-2">{currentIndex + 1}.</span> 
        {currentQuestion.questionEnglish}</p>
      <ol className='grid grid-cols-2 gap-8 justify-center'>
        <li className='flex items-center gap-2'>
          <input 
            type="radio" 
            name="radio-1" 
            className="radio" 
            id='option1' 
            value={currentQuestion.option[0]} 
            onChange={handleRadioChange}
            checked={false}
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
            checked={false}
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
            checked={false}
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
            checked={false}
          /> 
          <label htmlFor="option4">{currentQuestion.option[3]}</label>
        </li>
      </ol>
    </div>
  </div>
  )
}

export default McqQuesstionCard