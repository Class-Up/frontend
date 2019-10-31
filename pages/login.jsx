import React from 'react'

import Link from 'next/link'

import api from '../lib/api'

import ImageAndSideContainer from '../components/ImageAndSideContainer'
import Title from '../components/Title'
import FormLogin from '../components/FormLogin'
import Button from '../components/Button'

function Login () {
  const login = async ({ email, password }) => {
    const { token } = await api.login(email, password)

    sessionStorage.setItem('token', token)

    props.history.push('/student')
  }

  return (
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

      <Link href='../student'>
        <a className='is-block has-margin-top-1'>
          <div className='is-block'>
            <Button
              text='Iniciar Sesión'
            />
          </div>
        </a>
      </Link>
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
