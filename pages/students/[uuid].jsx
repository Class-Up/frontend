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
      const response = await api.getStudent(uuid)
      const parsedJson = await response.json()
      const { student } = parsedJson.data
      if (!state.student) setState({ student, isLoading: false })
    }
    getStudent()

    return () => {
      abortController.abort();
    }
  })

  return (
    <section class="hero is-fullheight-with-navbar">
      <div class="hero-body">
        <div class="container">
          <div className='student-profile'>
            {state.isLoading && <Loading />}
            <div className='columns'>
              {state.student && (
                <>
                  <div className="column is-one-quarter has-text-centered">
                    <Avatar gender={state.student.gender} />
                    <Title
                      text={state.student.firstName}
                      size='3'
                    />
                    <LearningType />
                  </div>
                  <div className='column is-one-quarter'>
                    <MedalsList medals={state.student.medals} />
                  </div>
                  <div className='column is-half'>
                    <GroupList groups={state.student.groups} />
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Students
