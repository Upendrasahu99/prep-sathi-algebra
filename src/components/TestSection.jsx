import React from 'react'
import McqBox from './McqBox.jsx'
import retrieveData from '../utils/retrieveData.js';
import { useState } from 'react';

const TestSection = () => {
  const[testStarted, setTestStarted] = React.useState(false);
  const [testQuestionArr, setTestQuestionArr] = useState([]);

  const handleStartTest = () => {
    setTestStarted(true);
    setTestQuestionArr(retrieveData());
    return;
  }

  return (
    <div className='flex justify-center items-center'>
      {
        testStarted ?
        <McqBox testQuestionArr={testQuestionArr} />
        :
        <button className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg" onClick={handleStartTest}>Start Test</button>
      }
    </div>
  )
}

export default TestSection