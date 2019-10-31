
import React from 'react'

import Image from '../components/Image'

function ImageAndSideContainer (props) {
  return (
    <div className='hero is-fullheight-with-navbar'>
      <div className='hero-body'>
        <div className='columns has-text-centered'>
          <div className='column is-half-desktop'>
            <Image
              name={props.image}
            />
          </div>
          <div className='column is-half-desktop'>
            <div className='column'>
              {props.children}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ImageAndSideContainer
