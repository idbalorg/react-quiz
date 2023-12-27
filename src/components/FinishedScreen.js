import React from 'react'

function FinishedScreen({maxPossiblePoint, points}) {
    const percentage = Math.ceil((points/maxPossiblePoint)*100)
  return (
    <p className='result'>
        you scored <strong>{points}</strong> out of {maxPossiblePoint} ({percentage}%)
    </p>
  )
}

export default FinishedScreen