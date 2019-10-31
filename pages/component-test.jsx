
import React from 'react'
import Medals from '../components/Medals'
//import BottomNavbar from '../components/BottomNavbar'
import FloatActionButton from '../components/FloatActionButton'

function ComponentTest () {
  return (
    <div className='container'>
      <div className='column'>
        {/* <BottomNavbar
          icons={[
            'fas fa-sticky-note',
            'fas fa-calendar',
            'fas fa-tasks',
            'fas fa-user-graduate'
          ]}
        /> */}
        <Medals image='conquer' />
        <FloatActionButton />
      </div>
    </div>
  )
}

export default ComponentTest
