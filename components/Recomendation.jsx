import React from 'react'

function Recomendation (props) {
  return (
    <div class='card recomendation-card'>
      <div class='card-content'>
        <p class='title'>
          {props.tittle}
        </p>
        <p class='subtitle'>
          {props.recomendation}
        </p>
      </div>
    </div>
  )
}
export default Recomendation
