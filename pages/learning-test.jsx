import React from 'react'

import Question from '../components/Question'

import questions from '../constants/questions'

function LearningTest () {
  return (
    <>
      {questions.map((question, index) => {
        return (
          <Question
            question={question.question}
            options={question.options}
            key={index}
          />
        )
      })}
    </>
  )
}

export default LearningTest
