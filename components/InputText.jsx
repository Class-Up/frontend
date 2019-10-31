
import React from 'react'

function InputText (props) {
  return (
    <div className='field margin-top'>
      <div className='control'>
        <textarea
          className='textarea is-primary'
          placeholder={props.placeholder}
        />
      </div>
    </div>
  )
}

export default InputText
