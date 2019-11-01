const BASE_API_URL = 'http://api.classup.space'
// const BASE_API_URL = 'http://localhost:8080'

async function getStudent (studentId) {
  const response = await fetch(`${BASE_API_URL}/students/${studentId}`)

  const parsedJson = await response.json()
  const { student } = parsedJson.data
  return student
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
async function getTeacher (teacherId) {
  const response = await fetch(`${BASE_API_URL}/teachers/${teacherId}`)

  const parsedJson = await response.json()
  const { teacher } = parsedJson.data
  return teacher
}
export default {
  login,
  getStudent,
  getTeacher
}
