import React from 'react'

export default function NextButton({answer, dispatch}) {

    if (answer === null) return
  return (
    <button onClick={()=>dispatch({type : "nextQuestion"})} className='btn btn-ui' >Next</button>
  )
}

