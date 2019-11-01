import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'

import api from '../../lib/api'

import Avatar from '../../components/Avatar'
import Title from '../../components/Title'
import Loading from '../../components/Loading'
import LearningType from '../../components/LearningType'
import MedalsList from '../../components/MedalsList'
import GroupList from '../../components/GroupList'

function Students () {
  const [state, setState] = useState({ isLoading: true })

  const router = useRouter()
  const { uuid } = router.query

  useEffect(() => {
    const abortController = new AbortController()

    const getStudent = async () => {
      const student = await api.getStudent(uuid)
      if (!state.student) {
        setState({
          student,
          isLoading: false
        })
        console.log('Student:', student)
      }
    }
    getStudent()

    return () => {
      abortController.abort()
    }
  })

  return (
    <div className='student-profile'>
      {state.isLoading && <Loading />}
      <div className='columns'>
        {state.student && (
          <>
            <div className='column is-3'>
              <div className="columns is-centered has-text-centered is-multiline">
                <div className="column is-full">
                  <Avatar gender={state.student.gender} />
                  <Title
                    text={state.student.firstName}
                    size='4'
                  />
                  <LearningType />
                  <div className="column is-full">
                    <MedalsList medals={state.student.medals} />
                  </div>
                </div>
              </div>
            </div>
            <div className='column is-9'>
              <GroupList groups={state.student.groups} />
            </div>
          </>
        )}
      </div>
    </div>
  )
}

export default Students
