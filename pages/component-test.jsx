
import React from 'react'
<<<<<<< HEAD
import BottomNavbar from '../components/BottomNavbar'
import Modal from '../components/Modal'
import BottomNavbarIcon from '../components/BottomNavbarIcon'
=======
import Group from '../components/Group'
>>>>>>> d662c395c0270750c18ab4ea13fcd83074ca0502

function ComponentTest () {
  return (
    <div className='container'>
      <div className='column'>
<<<<<<< HEAD
        {/* <BottomNavbar
          icons={[
            'fas fa-user-graduate',
            'fas fa-sticky-note',
            'fas fa-tasks',
            'fas fa-sticky-note'
          ]}
=======
        <Group
          name='Javascript'
          studentsQuantity='5'
          tasksQuantity='20'
          students={[{ gender: 'female' }, { gender: 'female' }, { gender: 'male' }, { gender: 'male' }]}
>>>>>>> d662c395c0270750c18ab4ea13fcd83074ca0502
        />
      </div>
      <Modal title='Agregar'/> */}
      <BottomNavbarIcon image=''/>
    </div>
  )
}

export default ComponentTest
