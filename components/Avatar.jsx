import React from 'react'

function Avatar (props) {
  return (
    <figure className='image is-96x96'>
      <img className='is-circular is-avatar' src={props.image} />
    </figure>
  )
}
export default Avatar
