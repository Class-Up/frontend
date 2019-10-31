import React from 'react'

import Medals from './Medals'
import Title from './Title'

function MedalsList (props) {
  return (
    <div className='medal-list'>
      <Title
        size='5'
        text='Tus Medallas'
      />
      <div className="columns is-multiline is-mobile">
        {props.medals.map((medal, index) => {
          return (
            <div className="column is-one-third" key={index}>
              <Medals
                image={medal.name}
              />
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default MedalsList
