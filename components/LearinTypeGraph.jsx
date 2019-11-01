import React from 'react'
import { Radar } from 'react-chartjs-2'

function LearningTypeGraph (props) {
  function formatData (data) {
    return {
      labels: ['Kinestesico', 'Auditivo', 'Visual'],
      datasets: [
        {
          label: 'Mi tipo de aprendizaje',
          backgroundColor: 'rgba(254,56,136,0.2)',
          borderColor: 'rgba(254,56,136,1)',
          pointBackgroundColor: 'rgba(254,56,136,1)',
          pointBorderColor: '#fff',
          pointHoverBackgroundColor: '#fff',
          pointHoverBorderColor: 'rgba(254,56,136,1)',
          data: [65, 59, 90] // Aqui se cambian los datos
        }
      ]
    }
  }
  return (
    <Radar data={formatData(props.data)} />
  )
}

export default LearningTypeGraph
