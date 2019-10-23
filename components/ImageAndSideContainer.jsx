
import React from 'react'

import Image from '../components/Image'

function ImageAndSideContainer (props) {
  return (
    <div className='columns has-text-centered'>
      <div className='column is-half'>
        <Image
          name={props.image}
        />
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
