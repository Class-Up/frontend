import React from 'react'
import Icon from './Icon'
import Title from './Title'
import BodyText from './BodyText'

function TaskCard (props) {
  return (
    <div className='task-card'>
      <div className='card '>
        <div className='card-content'>
          <div className='content'>
            <div className='has-text-left'>
              <Title text={props.task.title} size='4' />
              <BodyText text={props.task.description} position='left' />
            </div>
            <div className='columns is-mobile'>
              <div className='column'>
                <div className='columns is-centered is-mobile'>
                  <div className='column is-2'>
                    <Icon name='times' />
                  </div>
                </div>
              </div>
              <div className='column'>
                <div className='columns is-centered is-mobile'>
                  <div className='column is-2'>
                    <Icon name='check' />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TaskCard
