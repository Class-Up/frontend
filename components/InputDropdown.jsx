import React from 'react'

function InputDropdown (props) {
  const options = props.options.map((option, index) => {
    return (<option key={index}>{option}</option>)
  })

  return (
    <div class='select'>
      <select>
        {options}
      </select>
    </div>
  )
}

export default InputDropdown
