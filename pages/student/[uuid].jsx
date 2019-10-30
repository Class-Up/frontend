import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'

import api from '../../lib/api'

function Student () {
  const [state, setState] = useState({ student: {} })

  const router = useRouter()
  const { uuid } = router.query

  useEffect(() => {
    const getStudent = async function () {
      const response = await api.getStudent(uuid)
      const student = await response.json()
      setState({ student })
    }
    getStudent()
  })

  return (
    <div className='is-title'>
      Uuid: {JSON.stringify(state.student)}
    </div>
  )
}

export default Student
