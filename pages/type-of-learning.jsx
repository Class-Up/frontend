import React from 'react'

import Link from 'next/link'

import ImageAndSideContainer from '../components/ImageAndSideContainer'
import Title from '../components/Title'
import BodyText from '../components/BodyText'
import Button from '../components/Button'

function TypeOfLearning () {
  return (
    <ImageAndSideContainer
      image='pluto-personality-analysis.svg'
    >
      <Title
        isBlack
        text='¡Descubre tu tipo de aprendizaje!'
      />
      <BodyText
        position='justified'
        text='La mejor forma de que saques el mayor partido a tu aprendizaje es saber con que tipo te relacionas mejor.'
      />

      <Link href='/learning-test'>
        <a className='is-block has-margin-top-1'>
          <Button
            text='Iniciar Cuestionario'
          />
        </a>
      </Link>
      <Link href='/personality-insights'>
        <a className='is-block has-margin-top-1'>
          <Button
            isOutlined
            text='Omitir'
          />
        </a>
      </Link>
    </ImageAndSideContainer>

  )
}

export default TypeOfLearning
