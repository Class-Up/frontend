import React from 'react'

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
        text={`La mejor forma de que saques el mayor partido a tu aprendizaje es saber con que tipo te relacionas mejor.

        Existen 3 tipos de aprendizajes:
        - Kinestesico
        - Visual
        - Auditivo`}
      />
      <Button
        text='Iniciar'
      />
      <br />
      <Button
        isOutlined
        text='Omitir'
      />
    </ImageAndSideContainer>

  )
}

export default TypeOfLearning
