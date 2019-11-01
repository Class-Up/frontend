import React from 'react'

function FloatActionButton () {

function handleClick(){
  document.getElementById("modalCard").style.display='block'
}

  return (
    <div className='is-hexagon is-fab' onClick={handleClick}>
      <div className='has-text-centered'>
        <a>
          <span className='icon is-size-5'>
            <i className='fas fa-plus' />
          </span>
        </a>
      </div>
    </div>
  )
}

export default FloatActionButton
