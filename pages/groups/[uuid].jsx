import React from 'react'

import api from '../../lib/api'

import TaskCardList from '../../components/TaskCardList'
import StudentsHexagonsList from '../../components/StudentsHexagonsList'

function GroupDetails (props) {
  const { group = {} } = props

  return (
    <div className='group-details'>
      <StudentsHexagonsList students={group.students} group={group.name} />
      <br />
      <TaskCardList tasks={group.tasks} group={group.name} />
    </div>
  )
}

GroupDetails.getInitialProps = async (ctx) => {
  const group = await api.getGroup(ctx.query.uuid)
  return { group }
}

export default GroupDetails
