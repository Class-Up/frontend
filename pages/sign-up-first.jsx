
import React from 'react'

import ImageAndSideContainer from '../components/ImageAndSideContainer'
import Title from '../components/Title'
import FormSignUp from '../components/FormSignUp'
import Button from '../components/Button'

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
