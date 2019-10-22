import React from 'react'

function Navbar (props) {
  return (
    <nav className='navbar' role='navigation' aria-label='main navigation'>
      <div className='navbar-brand'>
        <img
          src='http://cdn.classup.space/brand/logo-banner.svg'
          alt='Logo ClassUp'
          width='112'
          height='28'
        />
      </div>
    </nav>
  )
}

export default Navbar
