import React from 'react'
import Title from './Title'
import InputOpcion from './InputOpcion'

function Question (props) {
  return (
    <div>
      <Title
        weight='semibold'
        isBlack
        size='4'
        text={props.question}
      />
      <InputOpcion
        options={props.options}
        question={props.question}
      />
    </div>
  )
}

export default Question
