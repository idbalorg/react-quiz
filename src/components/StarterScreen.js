import React from 'react'
import { useQuiz } from '../QuizContext'

export default function StarterScreen() {
  const {numQuestion, dispatch} = useQuiz()
  return (
    <div className='start'>
        <h2>Welcome to React Quiz!</h2>
        <h3>{numQuestion} questions to test your React mastery</h3>
        <button className='btn btn-ui' onClick={()=> dispatch({type : "start"})}>Let's start</button>
    </div>
  )
}
