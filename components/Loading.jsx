import React from 'react'

function Loading (props) {
  return (
    <div className='columns'>
      <div className='column is-full'>
        <span className='icon has-text-primary is-size-1'>
          <i className='fas fa-spinner fa-spin' />
        </span>
      </div>
    </div>
  )
}

export default Loading
