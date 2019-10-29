
import React from 'react'

import Input from '../components/Input'
import InputDropdown from '../components/InputDropdown'

function FormPersonalData (props) {
  return (
    <form className='has-text-left'>
      <Input
        type='text'
        label='Nombre'
        placeholder='Escribe tu nombre'
      />
      <Input
        type='text'
        label='Apellidos'
        placeholder='Escribe tus Apellidos'
      />
      <InputDropdown
        label='Escolaridad'
        options={['Secundaria', 'Preparatoria', 'Carrera Técnica', 'Universidad', 'Postgrado']}
      />
      <Input
        type='text'
        label='Edad'
        placeholder='Ingresa tu edad'
      />
    </form>
  )
}

export default FormPersonalData
