import React from 'react'
import { useQuiz } from '../QuizContext'

function Options({question}) {
  const { answer, dispatch} = useQuiz()
  console.log("this" +question)
  const hasAnswered = answer !== null
  return (
    <div className='options'>
         {question.options.map((option, index)=>
         <button
         disabled={hasAnswered}
          className={`btn btn-option ${index === answer ? 'answer' : ""} ${hasAnswered ? index === question.correctOption ? 'correct' : "wrong" : null}`} 
          key={option} 
          onClick={()=>dispatch({type :'newAnswer', payload : index }, console.log("i got clicked" + index))}>
            {option}
          </button>)}
    </div>  )
}

export default Options