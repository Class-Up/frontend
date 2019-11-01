import React from 'react'

function Navbar (props) {
  return (
    <nav className='navbar has-text-centered-touch' role='navigation' aria-label='main navigation'>
      <div className='navbar-brand has-text-centered-touch'>
        <a href='/' className='navbar-item is-centered-touch'>
          <img
            src='http://cdn.classup.space/brand/logo-banner.svg'
            alt='Logo ClassUp'
            width='112'
            height='28'
          />
        </a>
      </div>
    </nav>
  )
}

export default Navbar
