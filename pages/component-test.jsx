
import React from 'react'
import BottomNavbar from '../components/BottomNavbar'

function ComponentTest () {
  return (
    <div className='container'>
      <div className='column'>
        <BottomNavbar
          icons={[
            'fas fa-user-graduate',
            'fas fa-sticky-note',
            'fas fa-tasks',
            'fas fa-sticky-note'
          ]}
        />
      </div>
    </div>
  )
}

export default ComponentTest
