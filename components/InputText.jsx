
import React from 'react'

function InputText (props) {
  return (
    <div class='field'>
      <div class='control'>
        <textarea
          class='textarea is-primary'
          placeholder={props.placeholder}
        />
      </div>
    </div>
  )
}

export default InputText
