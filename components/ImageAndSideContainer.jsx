
import React from 'react'

function ImageAndSideContainer (props) {
  return (
    <div className='columns has-text-centered'>
      <div className='column is-half-desktop'>
        <figure className='image'>
          <img src={props.image} alt={props.image} />
        </figure>
      </div>
      <div className='column is-half-desktop'>
        <div className='column'>
          {props.children}
        </div>
      </div>
    </div>
  )
}

export default ImageAndSideContainer
