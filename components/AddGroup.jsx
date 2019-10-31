import React from 'react'
import Icon from './Icon'

function AddGroup (props) {
  return (
    <div className='group-add'>
      <div className='card has-background-grey-light'>
        <div className='card-content has-text-white is-size-3 has-text-centered'>
          <Icon
            name='plus'
          />
        </div>
      </div>
    </div>
  )
}

export default AddGroup
