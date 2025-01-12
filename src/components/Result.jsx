import {useContext, useState, useEffect} from 'react'
import { AppContext } from '../context/AppContextProvider'

const Result = () => {
  const {resultData} = useContext(AppContext);
  console.log(resultData);
  const [totalRight, setTotalRight] = useState(0);
  const [totalWrong, setTotalWrong] = useState(0);

  useEffect(() => {
    let right = 0;
    let wrong = 0;

    resultData.forEach(data => {
      if (data.answerSelected === data.answer[0]) {
        right++;
      } else {
        wrong++;
      }
    });

    setTotalRight(right);
    setTotalWrong(wrong);
  }, [resultData]);

  return (
        <div>
          <div className='flex gap-5 mb-5'>
            <div className='badge badge-success ms-auto'>Correct: {totalRight}</div>
            <div className='badge badge-error me-auto'>Wrong: {totalWrong}</div>
          </div>
          <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 justify-center'>
              {resultData.map((data, index) => { 
                const rightAnswer = data.answer[0];
                const option = data.option;
                const noRightOption = !(data.option.includes(rightAnswer));
                const isAnswerCorrect = data.answerSelected === rightAnswer;
                const borderColor = noRightOption ? 'border-warning' : isAnswerCorrect ? 'border-success' : 'border-error';
    
                return(
                  <div key={index} className={`card bg-base-100 w-96 shadow-xl border-2 ${borderColor}`}>
                    {
                      noRightOption ? <div className='badge badge-warning mx-auto mt-3 text-sm'>Invalid question: ID {data.id}, Topic {data.topic}. Please report it</div>
                      :
                      isAnswerCorrect ?
                      <div className='badge badge-success mx-auto mt-3'>Correct</div>
                      :
                      <div className='badge badge-error mx-auto mt-3'>Wrong</div>
                    }
                    <div className="card-body flex flex-col gap-2">
                      <p><span className="badge badge-neutral me-2">{index + 1}.</span>{data.questionHindi}</p>
                      <p><span className="badge badge-neutral me-2">{index + 1}.</span>{data.questionEnglish}</p>
                      <ol className='grid grid-cols-2 gap-5 justify-center'>
                        {option.map((opt, index) => 
                          <li className='flex items-center gap-2' key={index}>
                            <input 
                              type="radio" 
                              className={`radio ${rightAnswer === opt ? 'radio-success' : data.answerSelected === opt ? 'radio-error' : ''}`}
                              defaultChecked={data.answerSelected === opt || rightAnswer === opt}
                              disabled
                            /> 
                            <label>{opt}</label>
                          </li>
                        )}
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