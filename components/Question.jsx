import React from 'react'
import Title from './Title'
import InputOpcion from './InputOpcion'

function Question (props) {
  return (
    <div className='has-text-justified question'>
      <Title
        weight='semibold'
        isBlack
        mobile='6'
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
