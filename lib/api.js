
const baseUrl = 'http://api.classup.space'

function getStudent (studentId) {
  return fetch(`${baseUrl}/student/${studentId}`)
}

export default {
  getStudent
}
