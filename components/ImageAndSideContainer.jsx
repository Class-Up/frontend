
import React from 'react'

function ImageAndSideContainer (props) {
  return (
    <div className='columns is-mobil has-text-centered'>
      <div className='column is-half'>
        <img src={props.image} alt={props.image} />
      </div>
      <div className='column is-half'>
        <div className='column'>
          {props.children}
        </div>
      </div>
    </div>
  )
}

export default ImageAndSideContainer
