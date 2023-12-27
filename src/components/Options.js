import React from 'react'

function Options({question, answer, dispatch}) {
  return (
    <div className='options'>
         {question.options.map((option, index)=>
         <button
          className='btn btn-option' 
          key={option} 
          onClick={()=>dispatch({type :'newAnswer', payload : index }, console.log("i got clicked" + index))}>
            {option}
          </button>)}
    </div>  )
}

export default Options