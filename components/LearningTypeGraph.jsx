import React from 'react'
import { Radar } from 'react-chartjs-2'

function LearningTypeGraph (props) {
  function formatData (data) {
    return {
      labels: ['Kinestesico', 'Auditivo', 'Visual'],
      datasets: [
        {
          with: 600,
          height: 600,
          options: { maintainAspectRatio: false },
          label: 'Mi tipo de aprendizaje',
          backgroundColor: 'rgba(254,56,136,0.2)',
          borderColor: 'rgba(254,56,136,1)',
          pointBackgroundColor: 'rgba(254,56,136,1)',
          pointBorderColor: '#fff',
          pointHoverBackgroundColor: '#fff',
          pointHoverBorderColor: 'rgba(254,56,136,1)',
          data: [data.kinesthetic, data.auditive, data.visual]
        }
      ]
    }
  }
  return (
    <Radar data={formatData(props.data)} />
  )
}

export default LearningTypeGraph
