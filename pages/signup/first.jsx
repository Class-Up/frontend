
import React from 'react'

import Link from 'next/link'

import ImageAndSideContainer from '../../components/ImageAndSideContainer'
import Title from '../../components/Title'
import FormSignUp from '../../components/FormSignUp'
import Button from '../../components/Button'

function SignUp () {
  return (
    <ImageAndSideContainer
      image='pluto-rocket-launch.svg'
    >
      <Title
        isBlack
        text='Crear Una Cuenta'
      />
      <div className='form-container'>
        <FormSignUp />
      </div>
      <Link href='/signup/second'>
        <a className='is-block has-margin-top-1'>
          <Button
            text='Continuar Registro'
          />
        </a>
      </Link>
      <Link href='/login'>
        <a className='is-block has-margin-top-1'>
          <Button
            isOutlined
            text='Iniciar Sesión'
          />
        </a>
      </Link>
    </ImageAndSideContainer>

  )
}

export default SignUp
