import React from 'react'

import Medals from './Medals'

function MedalsList (props) {
  return (
    <>
      {props.medals.map((medal, index) => {
        return (
          <Medals
            image={medal.name}
            key={index}
          />
        )
      })}
    </>
  )
}

export default MedalsList
