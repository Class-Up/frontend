
import React from 'react'

function Button (props) {
  const style = ['button', 'classup-button', 'is-primary', 'is-rounded', 'is-size-4', 'is-size-6-touch']

  if (props.isOutlined) style.push('is-outlined')

  const className = style.join(' ')

  return (
    <button
      className={className}
      type={props.type}
    >
      {props.text}
    </button>
  )
}

export default Button
