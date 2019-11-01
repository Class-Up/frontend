import React from 'react'

function Modal (props) {

function handleClick(){
  document.getElementById('modalCard').style.display='none'
}

  return (
    <div id='modalCard' className='modal'>
      <div className='modal-background' />
      <div className='modal-card'>
        <header className='modal-card-head'>
          <p className='modal-card-title'>{props.title}</p>
          <button className='delete' aria-label='close' onClick={handleClick} />
        </header>
        <div className='columns'>
          <section className='modal-card-body'>
            <div class='field is-grouped'>
              <p class='control'>
                <button class='button is-primary'>
              Crear Grupo
                </button>
              </p>
              <p class='control'>
                <button class='button is-primary'>
               Agregar Alumno
                </button>
              </p>
              <p class='control'>
                <button class='button is-primary'>
               Cancelar
                </button>
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}

export default Modal
