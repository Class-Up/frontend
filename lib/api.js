
const baseUrl = 'http://api.classup.space'

function getStudent (studentId) {
  return fetch(`${baseUrl}/students/${studentId}`)
}

function getTeacher (teacherId) {
  return fetch(`${baseUrl}/teachers/${teacherId}`)
}

export default {
  getStudent,
  getTeacher
}
