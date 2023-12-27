import React from 'react'

function Progress({answer, index, numQuestion, points, maxPossiblePoint}) {
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