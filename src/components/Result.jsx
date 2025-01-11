import React, { useEffect, useState } from 'react'

const Result = ({testQuestionArr}) => {
  const [totalRight, setTotalRight] = useState(0);
  const [totalWrong, setTotalWrong] = useState(0);

  useEffect(() => {
    let right = 0;
    let wrong = 0;

    testQuestionArr.forEach(data => {
      if (data.answerSelected === data.answer[0]) {
        right++;
      } else {
        wrong++;
      }
    });

    setTotalRight(right);
    setTotalWrong(wrong);
  }, [testQuestionArr]);

  return (
    <div>
      <div className='flex gap-5 mb-5'>
        <div className='badge badge-success ms-auto'>Correct: {totalRight}</div>
        <div className='badge badge-error me-auto'>Wrong: {totalWrong}</div>
      </div>

      <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 justify-center'>
          {testQuestionArr.map((data, index) => { 
            const questionId = data.id;
            const questionTopic = data.topic;
            const quesitonHindi = data.questionHindi;
            const answerSelected = data.answerSelected;
            const rightAnswer = data.answer[0];
            const option1 = data.option[0];
            const option2 = data.option[1];
            const option3 = data.option[2];
            const option4 = data.option[3];
            const noRightOption = !(data.option.includes(rightAnswer));
            const isAnswerCorrect = answerSelected === rightAnswer;
            const borderColor = noRightOption ? 'border-warning' : isAnswerCorrect ? 'border-success' : 'border-error';

            return(
              <div key={index} className={`card bg-base-100 w-96 shadow-xl border-2 ${borderColor}`}>
                {
                  noRightOption ? <div className='badge badge-warning mx-auto mt-3 text-sm'>Invalid question: ID {questionId}, Topic {questionTopic}. Please report it</div>
                  :
                  isAnswerCorrect ?
                  <div className='badge badge-success mx-auto mt-3'>Correct</div>
                  :
                  <div className='badge badge-error mx-auto mt-3'>Wrong</div>
                }
                {}
                <div className="card-body flex flex-col gap-5">
                  <p>{index+1}. {quesitonHindi}</p>
                  <ol className='grid grid-cols-2 gap-5 justify-center'>
                    <li className='flex items-center gap-2'>
                      <input 
                        type="radio" 
                        className={`radio ${rightAnswer === option1 ? 'radio-success' : answerSelected === option1 ? 'radio-error' : ''}`}
                        id='option1' 
                        value={option1} 
                        defaultChecked={answerSelected === option1 || rightAnswer === option1}
                        disabled
                      /> 
                      <label htmlFor={`${data.id}${option1}`}>{option1}</label>
                    </li>
                    <li className='flex items-center gap-2'>
                      <input 
                        type="radio" 
                        className={`radio ${rightAnswer === option2 ? 'radio-success' : answerSelected === option2 ? 'radio-error' : ''}`}
                        id='option2' 
                        value={data.option[1]} 
                        defaultChecked={answerSelected === option2 || rightAnswer === option2}
                        disabled
                      />
                      <label htmlFor={`${data.id}${option2}`}>{option2}</label>
                    </li>
                    <li className='flex items-center gap-2'>
                      <input 
                        type="radio" 
                        className={`radio ${rightAnswer === option3 ? 'radio-success' : answerSelected === option3 ? 'radio-error' : ''}`} 
                        id='option3' 
                        value={option3} 
                        defaultChecked={answerSelected === option3 || rightAnswer === option3}
                        disabled
                      /> 
                      <label htmlFor={`${data.id}${option3}`}>{option3}</label>
                    </li>
                    <li className='flex items-center gap-2'>
                      <input 
                        type="radio" 
                        
                        className={`radio ${rightAnswer === option4 ? 'radio-success' : answerSelected === option4 ? 'radio-error' : ''}`} 
                        id='option4' 
                        value={data.option[3]} 
                        defaultChecked={answerSelected === option4 || rightAnswer === option4}
                        disabled
                      /> 
                      <label htmlFor={`${data.id}${option4}`}>{option4}</label>
                    </li>
                  </ol>
                </div>
              </div>
            )
            
          })}
      </div>
    </div>
  )
}

export default Result