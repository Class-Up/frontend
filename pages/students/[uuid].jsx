import React from 'react'
import Link from 'next/link'
import Router from 'next/router'

import api from '../../lib/api'

import Title from '../../components/Title'
import Avatar from '../../components/Avatar'
import Agenda from '../../components/Agenda'
import Button from '../../components/Button'
import MedalsList from '../../components/MedalsList'
import GroupList from '../../components/GroupList'
import LearningTypeGraph from '../../components/LearningTypeGraph'

function Students (props) {
  const { student = {} } = props

  return (
    <main className=' columns is-centered'>
      <div className='column is-3'>
        <div className='columns is-centered has-text-centered is-multiline'>
          <div className='column is-full has-text-centered is-centered'>
            <Avatar gender={student ? student.gender : 'female'} />
          </div>
          <div className='column is-full has-text-centered'>
            <Title
              text={student ? student.firstName : 'Fulano'}
              size='4'
            />
          </div>
          {student && (
            <div className='column is-full has-text-centered'>
              <MedalsList medals={student ? student.medals : []} />
            </div>
          )}
          {student && (
            <div className='column is-full has-text-centered' height='500px'>
              <LearningTypeGraph data={student ? student.learningRate : {}} />
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
            <GroupList groups={student ? student.groups : []} />
          </div>
          <div className='column is-two-third'>
            <Agenda tasks={student ? student.tasks : []} />
          </div>
        </div>
      </div>
    </main>
  )
}

Students.getInitialProps = async (ctx) => {
  const student = await api.getStudent(ctx.query.uuid)

  const { res } = ctx
  if (!student) {
    if (res) {
      res.writeHead(302, {
        Location: '/error'
      })
      res.end()
    } else {
      Router.push('/error')
    }
    return {}
  }

  return { student }
}

export default Students
