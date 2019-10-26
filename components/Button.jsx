
import React from 'react'

function Button (props) {
  const style = ['button', 'is-primary', 'is-rounded', 'is-size-4',]

  if (props.isOutlined) style.push('is-outlined')

  const className = style.join(' ')

  return (
    <button
      className={className}
    >
      {props.text}
    </button>
  )
}

export default Button
