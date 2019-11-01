import React from 'react'
import Title from './Title'
import BodyText from './BodyText'
import AddGroup from './AddGroup'
import ExagonalAvatar from './ExagonalAvatar'

function StudentsHexagonsList (props) {
  return (
    <div className='task-list'>
      <Title
        size='4'
        text={`Estudiantes Del Grupo: ${props.group}`}
      />
      <div className='columns is-mobile is-multiline'>
        {props.students.map((student, index) => {
          return (
            <div className='column is-1-desktop is-3-touch' key={index}>
              <ExagonalAvatar image={student.gender} />
              <BodyText text={student.firstName} />
            </div>
          )
        })}
        <div className='column is-1-desktop is-3-touch'>
          <AddGroup />
        </div>
      </div>
    </div>
  )
}

export default StudentsHexagonsList
