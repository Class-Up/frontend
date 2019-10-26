import React from 'react'

function Body (props) {
  const style = ['is-body']

  props.color
    ? style.push(`has-text-${props.color}`)
    : style.push('has-text-black')

  const className = style.join(' ')

  return (
    <p className={className}>
      {props.text}
    </p>
  )
}

export default Body
