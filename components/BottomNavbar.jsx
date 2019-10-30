import React from 'react'
import BottomNavbarIcon from './BottomNavbarIcon'

function BottomNavbar (props) {
  return (
    <div className='tabs is-centered'>
      <ul>
        {props.icons.map((icon, index) => {
          return (
            <BottomNavbarIcon
              image={icon}
              key={index}
            />
          )
        })}
      </ul>
    </div>
  )
}

export default BottomNavbar
