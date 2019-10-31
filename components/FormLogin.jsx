import React, { useState } from 'react'

import Input from './Input'

function FormLogin (props) {
  const [state, setState] = useState({
    email: '',
    password: ''
  })

  const onSubmit = (event) => {
    event.preventDefault()

    if (props.onSubmit) props.onSubmit(state)
  }

  const onChange = (event) => {
    setState({
      ...state,
      [event.target.name]: event.target.value
    })
  }

  return (
    <form
      className='has-text-left'
      onSubmit={onSubmit}
    >
      <Input
        id='email'
        name='email'
        type='email'
        label='Correo Electrónico'
        placeholder='example@something.com'
        onChange={onChange}
      />
      <Input
        id='password'
        name='password'
        type='password'
        label='Contraseña'
        placeholder='Escribe tu contraseña'
        onChange={onChange}
      />
    </form>
  )
}

export default FormLogin
