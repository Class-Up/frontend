
import React from 'react'

function Title (props) {
  const style = ['is-title']

  if (props.isBlack) style.push('has-text-black')

  if (props.weight) style.push(`has-text-weight-${props.weight}`)

  props.size
    ? style.push(`is-size-${props.size}`)
    : style.push('is-size-1')

  const className = style.join(' ')

  return (
    <p className={className}>
      {props.text}
    </p>
  )
}

export default Title
