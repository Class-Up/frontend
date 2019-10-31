
import React, { useState } from 'react'

function Input (props) {
  const [state, setState] = useState('')

  const onChange = (event) => {
    setState(event.target.value)
    if (props.onChange) props.onChange(event)
  }
  return (
    <div className='field'>
      <label className='label'>
        {props.label}
      </label>
      <div className='control'>
        <input
          className='input'
          id={props.id}
          name={props.name}
          type={props.type}
          placeholder={props.placeholder}
          value={state}
          onChange={onChange}
        />
      </div>
    </div>
  )
}

export default Input
