import React, { useState } from 'react'

import Link from 'next/link'

import Question from '../components/Question'

import questions from '../constants/questions'
import Button from '../components/Button'

function LearningTest () {
  const [responses, setResponses] = useState([])

  function onSelectQuestion (number, selectedOption) {
    setResponses([
      ...responses,
      {
        number,
        answer: selectedOption.type
      }
    ])
  }

  return (
    <div className='columns'>
      <div className='column is-half is-offset-one-quarter'>
        {questions.map((question, index) => {
          return (
            <Question
              question={question.question}
              options={question.options}
              number={question.number}
              onSelect={onSelectQuestion}
              key={index}
            />
          )
        })}

        <Link href='/personality-insights'>
          <a className='is-block has-margin-top-1'>
            <div className='has-text-centered'>
              <Button
                text='Continuar'
              />
            </div>
          </a>
        </Link>
      </div>
    </div>
  )
}

export default LearningTest
