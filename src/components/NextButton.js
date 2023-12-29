import React from 'react'

export default function NextButton({answer, dispatch, index, numQuestion}) {

    if (answer === null) return null;
    if (index < numQuestion - 1) {
      return (
        <button onClick={()=>dispatch({type : "nextQuestion"})} className='btn btn-ui' >Next</button>
      )
    } else {
      return (
        <button onClick={()=>dispatch({type : "finished"})} className='btn btn-ui' >Finish</button>
      )
    }
    
    
 
}

