
import React from 'react'

import Input from './Input'

function FormSignUp (props) {
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
      <Input
        type='password'
        label='Confirmar Contraseña'
        placeholder='Confirma tu contraseña'
      />
    </form>
  )
}

export default FormSignUp
