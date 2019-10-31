import React from 'react'

import Medals from './Medals'

function MedalsList (props) {
  return (
<<<<<<< Updated upstream
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
=======
    <div className='medal-list'>
      <Title
        size='5'
        text='Tus Medallas'
      />
      <div className='columns is-multiline is-mobile'>
        {props.medals.map((medal, index) => {
          return (
            <div className='column is-one-third' key={index}>
              <Medals
                image={medal.name}
              />
            </div>
          )
        })}
      </div>
    </div>
>>>>>>> Stashed changes
  )
}

export default MedalsList
