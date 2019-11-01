import React from 'react'

function Icon (props) {
  return (
    <span className='icon'>
      <i className={`fas fa-${props.name}`} />
    </span>
  )
}

export default Icon
