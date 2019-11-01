import React from 'react'
import Link from 'next/link'

import StudentCard from './StudentCard'
import Title from './Title'
import AddGroup from './AddGroup'

function StudentCardList (props) {
  // ToDo: buscar un mejor algoritmo
  const students = props.students.reduce((students, currentStudent) => {
    console.log('Names:', students.names)
    if (students.names.includes(currentStudent.firstName)) return students
    return {
      names: [
        ...students.names,
        currentStudent.firstName
      ],
      values: [
        ...students.values,
        currentStudent
      ]
    }
  }, { names: [], values: [] })

  return (
    <div className='group-list'>
      <Title
        size='3'
        text='Tus Alumnos'
      />
      <div className='columns is-multiline'>
        {students.values.map((student, index) => {
          if (!student) return <></>
          return (
            <div className='column is-full' key={index}>
              <Link href='/students/[uuid]' as={`/students/${student._id}`}>
                <a>
                  <StudentCard
                    gender={student.gender}
                    name={student.firstName + student.lastName}
                    learningRate={student.learningRate}
                  />
                </a>
              </Link>
            </div>
          )
        })}
        <div className='column is-full'>
          <AddGroup />
        </div>
      </div>
    </div>
  )
}

export default StudentCardList
