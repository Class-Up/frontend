
import React from 'react'

import Head from 'next/head'
import Link from 'next/link'

import ImageAndSideContainer from '../../components/ImageAndSideContainer'
import Title from '../../components/Title'
import Button from '../../components/Button'
import FormPersonalData from '../../components/FormPersonalData'

function SignUp2 () {
  return (
    <div>
      <Head>
        <title>SignUp | ClassUp</title>
      </Head>
      <ImageAndSideContainer
        image='pluto-rocket-sailing.svg'
      >
        <Title
          isBlack
          text='Cuéntanos Más De Ti'
          size='2'
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
    </div>
  )
}

export default SignUp2
