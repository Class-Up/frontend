
import React from 'react'

import ImageAndSideContainer from '../components/ImageAndSideContainer'
import Title from '../components/Title'
import FormSignUp from '../components/FormSignUp'
import Button from '../components/Button'

function SignUp () {
  return (
    <ImageAndSideContainer
      image='http://cdn.classup.space/assets/illustrations/pluto-rocket-launch.svg'
    >
      <Title
        isBlack
        text='Crear Una Cuenta'
      />
      <FormSignUp />
      <Button
        text='Registrate'
      />
      <Button
        isOutlined
        text='Iniciar Sesión'
      />
    </ImageAndSideContainer>

  )
}

export default SignUp
