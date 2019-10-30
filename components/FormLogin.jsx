import React from 'react'

import Input from './Input'

function FormLogin (props) {
  return (
    <form className='has-text-left'>
      <Input
        id='email'
        name='email'
        type='email'
        label='Correo Electrónico'
        placeholder='example@something.com'
      />
      <Input
        id='password'
        name='password'
        type='password'
        label='Contraseña'
        placeholder='Escribe tu contraseña'
      />
    </form>
  )
}

export default FormLogin
