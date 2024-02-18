import React from 'react'
import { useQuiz } from '../QuizContext'

function Progress() {
  const {answer, index, numQuestion, points, maxPossiblePoint} = useQuiz()
  return (
    <header className='progress'>
        <progress max={numQuestion} value={index + Number(answer !== null)}></progress>
        <p>
            Question <strong>{index + 1}/{numQuestion}</strong>
        </p>
        <p>
            <strong>{points}/{maxPossiblePoint}</strong> points
        </p>
        </header>
  )
}

export default Progress