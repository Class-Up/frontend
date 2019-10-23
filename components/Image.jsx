
import React from 'react'

function Image (props) {
  return (
    <figure className='image is-1by1'>
      <img src={`http://cdn.classup.space/assets/ilustrations/${props.name}`} />
    </figure>
  )
}

export default Image
