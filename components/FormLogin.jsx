import React from 'react'

import Input from './Input'

function FormLogin (props) {
  return (
    <form>
      <Input
        type='email'
        label='Correo Electrónico'
        placeholder='example@something.com'
      />
      <Input
        type='password'
        label='Contraseña'
        placeholder='Escribe una contraseña'
      />
    </form>
  )
}

export default FormLogin
