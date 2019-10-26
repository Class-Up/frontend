
import React from 'react'
import Medals from '../components/Medals'
import Avatar from '../components/Avatar'

function ComponentTest () {
  return (
    <div className='columns is-centered'>
      <div className='column is-half'>
        <Medals image='conquer' />
      </div>
      <div className='column is-half'>
        <Avatar gender='male' />
      </div>
    </div>
  )
}

export default ComponentTest
