
import React from 'react'

// ToDo: Change the 404 Page to a good one
function Error ({ statusCode }) {
  return (
    <div className='columns'>
      <div className='column'>
        <div className='box'>
          <article>
            <p className='is-size-1 has-text-danger'>
              Error 404 Pagina No Encontrada
            </p>
          </article>
        </div>
      </div>
    </div>
  )
}

export default Error
