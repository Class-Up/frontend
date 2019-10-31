
import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'

import api from '../../lib/api'

import Avatar from '../../components/Avatar'
import Title from '../../components/Title'
import Loading from '../../components/Loading'
import LearningType from '../../components/LearningType'
import BottomNavbar from '../../components/BottomNavbar'
import BodyText from '../../components/BodyText'
import Group from '../../components/Group'

function Teachers () {
  const [state, setState] = useState({ isLoading: true })

  const router = useRouter()
  const { uuid } = router.query

  useEffect(() => {
    const abortController = new AbortController()

    const getTeacher = async () => {
      const response = await api.getTeacher(uuid)
      const parsedJson = await response.json()
      const { teacher } = parsedJson.data
      if (!state.teacher) setState({ teacher, isLoading: false })
    }
    getTeacher()

    return () => {
      abortController.abort();
    }
  })

  return (
    <div className='teacher-profile'>
      {state.isLoading && <Loading />}
      <div className='columns'>
        {state.teacher && (
          <div className='column'>
            <Avatar gender='non-binary' />
            <Title
              text={state.teacher.firstName}
              size='3'
            />
            <LearningType />
            <BodyText
              text='Something About the Teacher'
            />
          </div>
        )}
        <div className='column has-text-centered'>
          <Group>

          </Group>
        </div>
        <div className='column has-text-centered'>jhk</div>
        {/* <div className='column has-text-centered'>ghjykhj</div>
        <div className='column has-text-centered'>ghjykhj</div> */}
      </div>
      <div>
        <BottomNavbar
          icons={['user', 'users']}
        />
      </div>
    </div>
  )
}

export default Teachers