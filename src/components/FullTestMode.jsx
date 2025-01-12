import React,{useState, useContext} from 'react'
import SelectData from './SelectData';
import { AppContext } from '../context/AppContextProvider';
import AllQuestionSection from './AllQuestionSection';

const FullTestMode = () => {
  const [startTest, setStartTest] = useState(false)
  const {setTestMode} =useContext(AppContext);

  return (
    <div>
      {
        startTest  ?
        <AllQuestionSection/>
        :
        <div className='flex flex-col gap-5'>
          <button className="btn sm:btn-sm md:btn-md" onClick={() => {setStartTest(true)}}>Start Test</button>
          <button className="btn sm:btn-sm md:btn-md" onClick={() => {setTestMode('modeSelection')}}>Go back</button>
        </div>
      }
    </div>
  )
}

export default FullTestMode