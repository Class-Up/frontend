import React from 'react'

function Medals (props) {
  return (
    <>
      <div className={`is-hexagon is-medal-${props.image}`} />
    </>
  )
}
export default Medals
