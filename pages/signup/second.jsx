
import React from 'react'

import Link from 'next/link'

import ImageAndSideContainer from '../../components/ImageAndSideContainer'
import Title from '../../components/Title'
import Button from '../../components/Button'
import FormPersonalData from '../../components/FormPersonalData'

function SignUp2 () {
  return (
    <ImageAndSideContainer
      image='pluto-rocket-sailing.svg'
    >
      <Title
        isBlack
        text='Cuéntanos Más De Ti'
      />
      <div className='form-container'>
        <FormPersonalData />
      </div>
      <Link href='../type-of-learning'>
        <a className='is-block has-margin-top-1'>
          <Button
            text='Continuar'
            type='submit'
          />
        </a>
      </Link>

    </ImageAndSideContainer>

  )
}

export default SignUp2
