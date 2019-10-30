import React from 'react'

import Link from 'next/link'

import ImageAndSideContainer from '../components/ImageAndSideContainer'
import Title from '../components/Title'
import FormLogin from '../components/FormLogin'
import Button from '../components/Button'

function Login () {
  return (
    <ImageAndSideContainer
      image='pluto-suit-ready.svg'
    >
      <Title
        isBlack
        text='Iniciar Sesión'
      />
      <FormLogin />
      <div className='is-block'>
        <Button
          text='Iniciar Sesión'
        />
      </div>

      <Link href='../signup/first'>
        <a className='is-block has-margin-top-1'>
          <div className='is-block'>
            <Button
              isOutlined
              text='Registrarme'
            />
          </div>
        </a>
      </Link>
    </ImageAndSideContainer>
  )
}

export default Login
