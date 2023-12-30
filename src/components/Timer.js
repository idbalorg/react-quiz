import React, { useEffect } from 'react'

export default function Timer({dispatch, timeRemaining}) {
    const min = Math.floor(timeRemaining / 60)
    const secs = timeRemaining % 60
    useEffect(()=>{
        
       const timerId = setInterval(()=>{dispatch({type : "tick"})}, 1000)
       return ()=> clearInterval(timerId)
    }, [dispatch])
  return (
    <div className='timer'>{min < 10 && 0}{min}:{secs}{secs < 10 && 0} </div>
  )
}
