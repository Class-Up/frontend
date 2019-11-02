import React from 'react'

function BottomNavbarIcon (props) {
  return (
    <li className={props.isActive}>
      <a>
        <span className='icon is-small'>
          <i className={`fas fa-${props.image}`} aria-hidden='true' />
        </span>
      </a>
    </li>
  )
}

export default BottomNavbarIcon
