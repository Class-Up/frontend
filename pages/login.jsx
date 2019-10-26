import React from 'react'

import ImageAndSideContainer from '../components/ImageAndSideContainer'
import Title from '../components/Title'
import FormSignUp from '../components/FormLogin'
import Button from '../components/Button'

function Login () {
  return (
    <ImageAndSideContainer
      image='http://cdn.classup.space/assets/illustrations/pluto-suit-ready.svg'
    >
      <Title
        isBlack
        text='Iniciar Sesión'
      />
      <FormSignUp />
      <Button
        text='Registrarme'
      />
      <Button
        isOutlined
        text='Iniciar Sesión'
      />
    </ImageAndSideContainer>
  )
}

export default Login
