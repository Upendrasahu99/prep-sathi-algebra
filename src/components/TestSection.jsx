import {useState} from 'react'
import FullTestMode from './FullTestMode.jsx';
import QuestionTestMode from './QuestionTestMode.jsx';

const TestSection = () => {
  const[testMode, setTestMode] = useState('');

  return (
    <div className='flex justify-center items-center'>
      {testMode === 'questionMode' && <QuestionTestMode />}
      {testMode === 'testMode' && <FullTestMode />}
      {
        testMode === '' &&
        <div className='flex flex-col gap-5'>
          <button className="btn sm:btn-sm md:btn-md lg:btn-lg" onClick={() => {setTestMode('questionMode')}}>Question-by-Question</button>
          <button className="btn sm:btn-sm md:btn-md lg:btn-lg" onClick={() => {setTestMode('testMode')}} disabled>Full Test</button>
        </div>
      }
    </div>
  )
}

export default TestSection