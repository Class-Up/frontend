import React from 'react'

import Avatar from './Avatar'
import BodyText from './BodyText'
import LearningTypeGraph from './LearningTypeGraph'

function StudentCard (props) {
  return (
    <div className='task-card'>
      <div className='card '>
        <div className='card-content'>
          <div className='content'>
            <div className='columns'>
              <div className='column is-half has-text-left'>
                <Avatar gender={props.gender} />
              </div>
              <div className='column is-half has-text-left'>
                <BodyText text={props.name} position='left' />
              </div>
              <div className='column is-half has-text-left'>
                <LearningTypeGraph data={props.learningRate} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default StudentCard
