
const baseUrl = 'http://api.classup.space'

function getStudent (studentId) {
  return fetch(`${baseUrl}/students/${studentId}`)
}

export default {
  getStudent
}
