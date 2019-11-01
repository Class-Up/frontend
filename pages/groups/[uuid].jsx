import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'

import api from '../../lib/api'

import Loading from '../../components/Loading'
import TaskCardList from '../../components/TaskCardList'
import StudentsHexagonsList from '../../components/StudentsHexagonsList'

function GroupDetails (props) {
  const [state, setState] = useState({ isLoading: true })

  const router = useRouter()
  const { uuid } = router.query

  useEffect(() => {
    const abortController = new AbortController()

    const getGroup = async () => {
      const group = await api.getGroup(uuid)
      if (!state.group) {
        setState({
          group,
          isLoading: false
        })
        console.log('group:', group)
      }
    }
    getGroup()

    return () => {
      abortController.abort()
    }
  })

  return (
    <div className='group-details'>
      {state.isLoading && <Loading />}
      {state.group && (
        <>
          <StudentsHexagonsList students={state.group.students} group={state.group.name} />
          <br />
          <TaskCardList tasks={state.group.tasks} group={state.group.name} />
        </>
      )}
    </div>
  )
}

export default GroupDetails
