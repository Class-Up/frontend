import React from 'react'

function InputDropdown (props) {
  const options = props.options.map((option, index) => {
    return (<option key={index}>{option}</option>)
  })

  return (
    <div className='field'>
      <label className='label'>{props.label}</label>
      <div className='control'>
        <div className='select'>
          <select>
            {options}
          </select>
        </div>
      </div>
    </div>
  )
}

export default InputDropdown
