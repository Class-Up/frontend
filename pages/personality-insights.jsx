import React from 'react'

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
            text='Analisis de Personalidad'
          />
          <BodyText
            text='Cuentanos un poco más sobre ti para que nuestra inteligencia artificial nos ayude a determinar cuáles son los mejores métodos de estudios para ti'
          />
          <InputText
            placeholder='Ingresa al menos 100 palabras'
          />
          <Button
            text='Finalizar'
          />
        </div>
      </ImageAndSideContainer>
    </div>
  )
}

export default PersonalityInsights
