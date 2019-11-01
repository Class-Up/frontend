import React from 'react'

import Link from 'next/link'

import ImageAndSideContainer from '../components/ImageAndSideContainer'
import Title from '../components/Title'
import BodyText from '../components/BodyText'
import InputText from '../components/InputText'
import Button from '../components/Button'

function PersonalityInsights () {
  return (
    <div className='container'>
      <ImageAndSideContainer
        image='pluto-talking.svg'
      >
        <div className='column'>
          <Title
            isBlack
            text='Análisis de Personalidad'
          />
          <BodyText
            text='Cuentanos un poco más sobre ti para que nuestra inteligencia artificial nos ayude a determinar cuáles son los mejores métodos de estudios para ti'
          />
          <InputText
            placeholder='Ingresa al menos 100 palabras'
          />
          <Link href='/students/5dae5cfaab8edd427663db7b'>
            <a className='is-block has-margin-top-1'>
              <Button
                text='Finalizar'
              />
            </a>
          </Link>
          <Link href='/student'>
            <a className='is-block has-margin-top-1'>
              <Button
                isOutlined
                text='Omitir'
              />
            </a>
          </Link>
        </div>
      </ImageAndSideContainer>
    </div>
  )
}

export default PersonalityInsights
