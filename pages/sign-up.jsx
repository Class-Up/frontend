
import React, { useState } from 'react'

import ImageAndSideContainer from '../components/ImageAndSideContainer'
import Title from '../components/Title'
import FormSignUp from '../components/FormSignUp'
import Button from '../components/Button'
import FormPersonalData from '../components/FormPersonalData'

function SignUp (props) {
  const [state, setState] = useState({
    step: 0,
    layout: [
      {
        image: 'pluto-rocket-launch.svg',
        title: 'Crear Una Cuenta',
        firstButton: 'Registrate',
        secondButton: 'Iniciar Sesión',
        component: <FormSignUp />,
        onClick: ()=>{
          setState({
            ...state,
            step: 1
          })
        }
      },
      {
        image: 'pluto-rocket-sailing.svg',
        title: 'Cuentanos Más De Ti',
        firstButton: 'Continuar',
        component: <FormPersonalData />
      }
    ]
  })

  return (
    <ImageAndSideContainer
      image={state.layout[state.step].image}
    >

      <Title
        isBlack
        text={state.layout[state.step].title}
      />
      <div className='form-container'>
        {state.layout[state.step].component}
      </div>
      <Button
        onClick={state.layout[state.step].onClick}
        text={state.layout[state.step].firstButton}
      />
      <Button
        isOutlined
        text={state.layout[state.step].secondButton}
      />
    </ImageAndSideContainer>

  )
}

export default SignUp
