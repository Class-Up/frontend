const BASE_API_URL = 'http://api.classup.space'
// const BASE_API_URL = 'http://localhost:8080'

async function getStudent (studentId) {
  const response = await fetch(`${BASE_API_URL}/students/${studentId}`)

  const parsedJson = await response.json()
  const { student } = parsedJson.data
  return student
}

async function getGroup (groupId) {
  console.log('Id:', groupId)
  const response = await fetch(`${BASE_API_URL}/groups/${groupId}`)

  const parsedJson = await response.json()
  const { groups } = parsedJson.data
  return groups
}

async function login (email, password) {
  const response = await fetch(`${BASE_API_URL}/login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      email,
      password
    })
  })

  if (!response.ok) throw new Error('Verificar Datos')

  const jsonBody = await response.json()

  return jsonBody.data
}

// async function validateSession () {
//   const response = await fetch(`${baseUrl}/students/login`, {
//     headers: {
//       authorization: sessionStorage.getItem('token')
//     }
//   })

//   if (!response.ok) throw new Error('Ocurrió un error al obtener los posts')

//   const jsonBody = await response.json()

//   return jsonBody.data
// }

export default {
  login,
  getStudent,
  getGroup
}
