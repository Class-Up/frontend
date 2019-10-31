
export default {

  async login (email, password) {
    const response = await fetch('http://localhost:8080/login', {
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
  },

  async validateSession () {
    const response = await fetch('http://localhost:8080/login/validate/session', {
      headers: {
        authorization: sessionStorage.getItem('token')
      }
    })

    if (!response.ok) throw new Error('Ocurrió un error al obtener los posts')

    const jsonBody = await response.json()

    return jsonBody.data
  }
}
