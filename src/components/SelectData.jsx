import React from 'react'

const SelectData = ({label ,options, optionSuffix, handleChange}) => {
  return (
    <div>
      <div className="label">
        <span className="label-text">{label}</span>
      </div>
      <select className="select select-bordered w-full max-w-xs" defaultValue={'selectOption'} onChange={(e) => { handleChange(e.target.value)}}>
        <option disabled value={'selectOption'}>Select Option</option>
        {options.map((data, index) =><option key={index} value={data}>{data} {optionSuffix}</option>)}
      </select>
    </div>
  )
}

export default SelectData