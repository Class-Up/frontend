import React from 'react'

import Head from 'next/head'
import Link from 'next/link'

import ImageAndSideContainer from '../components/ImageAndSideContainer'
import Title from '../components/Title'
import FormLogin from '../components/FormLogin'
import Button from '../components/Button'

function Login () {
  function login () {
    // ToDo: make the petition to the back
  }

  return (
    <div>
      <Head>
        <title>ClassUp | Login</title>
      </Head>
      <ImageAndSideContainer
        image='pluto-suit-ready.svg'
      >
        <Title
          isBlack
          text='Iniciar Sesión'
        />
        <FormLogin
          onSubmit={login}
        />

        <Link href='/teachers/5dae597729a0633d677378eb'>
          <a className='is-block has-margin-top-1'>
            <div className='is-block'>
              <Button
                text='Iniciar Sesión'
              />
            </div>
          </a>
        </Link>
        <Link href='/signup/first'>
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
    </div>
  )
}

export default Login
