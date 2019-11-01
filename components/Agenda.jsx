import React from 'react'
import Link from 'next/link'

import Title from './Title'
import TaskCard from './TaskCard'

function Agenda (props) {
  return (
    <div className='agenda'>
      <Title
        size='3'
        text='Tareas Pendientes'
      />
      <div className='columns is-multiline'>
        {props.tasks.map(({ taskId, isFinished }, index) => {
          return (
            <div className='column is-half' key={index}>
              <Link href='/tasks/[uuid]' as={`/tasks/${taskId}`}>
                <a>
                  <TaskCard
                    key={index}
                    task={taskId}
                    isFinished={isFinished}
                    isFromAgenda
                  />
                </a>
              </Link>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Agenda
