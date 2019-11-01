import React from 'react'
import Link from 'next/link'

import api from '../../lib/api'

import Title from '../../components/Title'
import Avatar from '../../components/Avatar'
import Button from '../../components/Button'
import GroupList from '../../components/GroupList'
import LearningTypeGraph from '../../components/LearningTypeGraph'
import StudentCardList from '../../components/StudentCardList'

function Teacher (props) {
  const { teacher = {} } = props
  return (
    <main className='columns is-centered'>
      <div className='column is-3'>
        <div className='columns is-centered has-text-centered is-multiline'>
          <div className='column is-full has-text-centered is-centered'>
            <Avatar gender={teacher.gender} />
          </div>
          <div className='column is-full has-text-centered'>
            <Title
              text={teacher.firstName}
              size='4'
            />
          </div>
          {teacher.learningRate && (
            <div className='column is-full has-text-centered' height='500px'>
              <LearningTypeGraph data={teacher.learningRate} isTeacher />
            </div>
          )}
          <div className='column is-full has-text-centered'>
            <Link href='/personality-insights'>
              <a>
                <Button text='Análisis de Personalidad' size='6' />
              </a>
            </Link>
          </div>
          <div className='column is-full has-text-centered'>
            <Link href='/learning-test'>
              <a>
                <Button text='Tipo de Estudiante' size='6' />
              </a>
            </Link>
          </div>
        </div>
      </div>
      <div className='column is-9'>
        <div className='columns'>
          <div className='column is-one-third'>
            <GroupList groups={teacher.groups} />
          </div>
          <div className='column is-two-third'>
            <StudentCardList students={teacher.students} />
          </div>
        </div>
      </div>
    </main>
  )
}

Teacher.getInitialProps = async (ctx) => {
  const teacher = await api.getTeacher(ctx.query.uuid)
  console.log('Students:', teacher.students)
  return { teacher }
}

export default Teacher
