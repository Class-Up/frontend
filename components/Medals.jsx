import React from 'react'

function Medals (props) {
  return (
    <div className={`is-hexagon is-medal is-${props.image}`} title={props.image} />
  )
}
export default Medals
