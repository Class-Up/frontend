import React from 'react'

function InputOpcion (props) {
  return (
    <div
      className='control'
    >
      {props.options.map((option, index) => {
        return (
          <label className='radio is-primary is-block answer' key={index}>
            <input type='radio' name={props.question} />
            {option.answer}
          </label>
        )
      })}
    </div>
  )
}

export default InputOpcion
