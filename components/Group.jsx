
import React from 'react'

import Title from './Title'
import Icon from './Icon'
import ExagonalAvatar from './ExagonalAvatar'

function Group (props) {
  return (
    <div className='group-card'>
      <div className='card '>
        <div className='card-content'>
          <div className='content'>
            <div className='has-text-left'>
              <Title text={props.name} size='4' />
            </div>
            <div className='columns is-mobile'>
              <div className='column'>
                <div className='columns is-mobile'>
                  <div className='column'>
                    <Icon name='tasks' />
                  </div>
                  <div className='column'>
                    {props.tasksQuantity}
                  </div>
                </div>
              </div>
              <div className='column'>
                <div className='columns is-mobile'>
                  <div className='column'>
                    <Icon name='user-graduate' />
                  </div>
                  <div className='column'>
                    {props.studentsQuantity}
                  </div>
                </div>
              </div>
            </div>
            <div className='columns is-mobile'>
              {props.students.map((student, index) => {
                if (index > 7) return null
                return (
                  <div className='column' key={index}>
                    <ExagonalAvatar image={student.gender} />
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Group
