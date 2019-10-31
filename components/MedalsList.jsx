import React from 'react'

import Medals from './Medals'
import Title from './Title'

function MedalsList (props) {
  return (
<<<<<<< HEAD
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
=======
>>>>>>> develop
    <div className='medal-list'>
      <Title
        size='5'
        text='Tus Medallas'
      />
<<<<<<< HEAD
      <div className='columns is-multiline is-mobile'>
        {props.medals.map((medal, index) => {
          return (
            <div className='column is-one-third' key={index}>
=======
      <div className="columns is-multiline is-mobile">
        {props.medals.map((medal, index) => {
          return (
            <div className="column is-one-third" key={index}>
>>>>>>> develop
              <Medals
                image={medal.name}
              />
            </div>
          )
        })}
      </div>
    </div>
<<<<<<< HEAD
>>>>>>> Stashed changes
=======
>>>>>>> develop
  )
}

export default MedalsList
