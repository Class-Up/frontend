import React from 'react'

import Head from 'next/head'
import Router from 'next/router'

import api from '../../lib/api'

import TaskCardList from '../../components/TaskCardList'
import StudentsHexagonsList from '../../components/StudentsHexagonsList'

function GroupDetails (props) {
  const { group = {} } = props

  return (
    <div>
      <Head>
        <title>{group.name} Group | ClassUp</title>
      </Head>
      <div className='group-details'>
        <StudentsHexagonsList students={group.students} group={group.name} />
        <br />
        <TaskCardList tasks={group.tasks} group={group.name} />
      </div>
    </div>
  )
}

GroupDetails.getInitialProps = async (ctx) => {
  const group = await api.getGroup(ctx.query.uuid)

  const { res } = ctx
  if (!group) {
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

  return { group }
}

export default GroupDetails
