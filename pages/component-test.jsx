
import React from 'react'
import Group from '../components/Group'
import Recomendation from '../components/Recomendation'

function ComponentTest () {
  return (
    <div className='container'>
      <div className='column'>
        <Group
          name='Javascript'
          studentsQuantity='5'
          tasksQuantity='20'
          students={[{ gender: 'female' }, { gender: 'female' }, { gender: 'male' }, { gender: 'male' }]}
        />
      </div>
    </div>
  )
}

export default ComponentTest
