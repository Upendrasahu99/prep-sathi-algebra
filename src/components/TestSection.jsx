import React from 'react'
import McqBox from './McqBox.jsx'

const TestSection = () => {
  const[testStarted, setTestStarted] = React.useState(false);

  const handleStartTest = () => {
    setTestStarted(true)
  }

  return (
    <div className='flex justify-center items-center'>
      {
        testStarted ?
        <McqBox />
        :
        <button className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg" onClick={handleStartTest}>Start Test</button>
      }
    </div>
  )
}

export default TestSection