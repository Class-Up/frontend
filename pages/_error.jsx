
import React from 'react'

import ImageAndSideContainer from '../components/ImageAndSideContainer'
import Title from '../components/Title'
import BodyText from '../components/BodyText'

function Error ({ statusCode }) {
  return (
    <div className='container'>
      <ImageAndSideContainer
        image='http://cdn.classup.space/assets/illustrations/pluto-rocket-crash.svg'
      >
        <div className='column'>
          <Title
            size='2'
            text={statusCode}
          />
          <Title
            isBlack
            text='Houston tenemos un problema'
          />
          <BodyText
            text='No pudimos encontrar lo que buscabas'
          />
        </div>
      </ImageAndSideContainer>
    </div>
  )
}

Error.getInitialProps = ({ res, err }) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404
  return { statusCode }
}

export default Error
