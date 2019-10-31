
import React, { useState } from 'react'

import Input from './Input'

function FormSignUp (props) {
  return (
    <form
      className='has-text-left'
    // onSubmit={onSubmit}
    >
      <Input
        id='email'
        name='email'
        type='email'
        label='Correo Electrónico'
        placeholder='example@something.com'
      // onChange={onChange}
      />
      <Input
        id='password'
        name='password'
        type='password'
        label='Contraseña'
        placeholder='Escribe una contraseña'
      // onChange={onChange}
      />
      <Input
        id='confirmPassword'
        name='confirmPassword'
        type='password'
        label='Confirmar Contraseña'
        placeholder='Confirma tu contraseña'
      // onChange={onChange}
      />
    </form>
  )
}
export default FormSignUp
