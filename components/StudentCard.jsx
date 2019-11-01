import React from 'react'

import BodyText from './BodyText'
import LearningTypeGraph from './LearningTypeGraph'
import ExagonalAvatar from './ExagonalAvatar'

function StudentCard (props) {
  return (
    <div className='task-card'>
      <div className='card '>
        <div className='card-content'>
          <div className='content'>
            <div className='columns is-vcentered'>
              <div className='column is-one-fifth has-text-left'>
                <ExagonalAvatar image={props.gender} />
              </div>
              <div className='column is-two-fifth has-text-left'>
                <BodyText text={props.name} position='left' />
              </div>
              <div className='column is-two-fifth has-text-left'>
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
