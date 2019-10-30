
import React from 'react'

function Image (props) {
  return (
    <figure className='image'>
      <img src={`http://cdn.classup.space/assets/illustrations/${props.name}`} alt={props.name} />
    </figure>
  )
}

export default Image
