import React from 'react'
import Title from './Title'
import AddGroup from './AddGroup'
import TaskCard from './TaskCard'

function TaskCardList (props) {
  return (
    <div className='task-list'>
      <Title
        size='4'
        text={`Tareas Del Grupo: ${props.group}`}
      />
      <div className='columns is-multiline'>
        <div className='column is-one-third'>
          <AddGroup />
        </div>
        {props.tasks.map((task, index) => {
          return (
            <div className='column is-one-third' key={index}>
              <TaskCard
                task={task}
              />
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default TaskCardList
