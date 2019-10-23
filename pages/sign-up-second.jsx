
import React from 'react'

import ImageAndSideContainer from '../components/ImageAndSideContainer'
import Title from '../components/Title'
import Button from '../components/Button'
import FormPersonalData from '../components/FormPersonalData'

function SignUp2 () {
  return (
    <ImageAndSideContainer
      image='pluto-rocket-sailing.svg'
    >

      <Title
        isBlack
        text='Cuentanos Más De Ti'
      />
      <div className='form-container'>
        <FormPersonalData />
      </div>
      <Button
        text='Continuar'
      />
    </ImageAndSideContainer>

  )
}

export default SignUp2