import React from 'react'

const McqBox = () => {
  return (
    <div className="card bg-base-100 w-96 shadow-xl">
      <div className="card-body flex flex-col gap-5">
        <p>यदि x + 9 = -2 है, तो x का मान ज्ञात कीजिए।</p>
        <ol className='grid grid-cols-2 gap-5 justify-center'>
          <li className='flex items-center gap-2'><input type="radio" name="radio-1" className="radio" id='option1'/> <label htmlFor="option1">-7</label></li>
          <li className='flex items-center gap-2'><input type="radio" name="radio-1" className="radio" id='option2'/> <label htmlFor="option2">-11</label></li>
          <li className='flex items-center gap-2'><input type="radio" name="radio-1" className="radio" id='option3'/> <label htmlFor="option3">7</label></li>
          <li className='flex items-center gap-2'><input type="radio" name="radio-1" className="radio" id='option4'/> <label htmlFor="option4">11</label></li>
        </ol>
      </div>
    </div>
  )
}

export default McqBox