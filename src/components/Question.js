import React from 'react'
import Options from './Options'

export default function Question({question, answer, dispatch= {dispatch}}) {
    console.log(question.question)
  return (
    <div>
        <h4>{question.question}</h4>
        <Options dispatch={dispatch} question={question} answer={answer}/>
    </div>
  )
}
