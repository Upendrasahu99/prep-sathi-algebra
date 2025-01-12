import {useContext, useState} from 'react'
import FullTestMode from './FullTestMode.jsx';
import QuestionTestMode from './QuestionTestMode.jsx';
import Result from './Result.jsx';
import {AppContext} from '../context/AppContextProvider.jsx';

const TestSection = () => {
  const {testMode, setTestMode, resultData} = useContext(AppContext);

  return (
    <div className='flex justify-center items-center'>
      {testMode === 'questionMode' && <QuestionTestMode/>}
      {testMode === 'testMode' && <FullTestMode/>}
      {testMode === 'result' && <Result resultData={resultData}/>}
      {
        testMode === 'modeSelection' &&
        <div className='flex flex-col gap-5'>
          <button className="btn sm:btn-sm md:btn-md lg:btn-lg" onClick={() => {setTestMode('questionMode')}}>Question-by-Question</button>
          <button className="btn sm:btn-sm md:btn-md lg:btn-lg" onClick={() => {setTestMode('testMode')}} disabled>Full Test</button>
        </div>
      }
    </div>
  )
}

export default TestSection