import React from 'react'

function FinishedScreen({maxPossiblePoint, points, highscore, dispatch}) {
    const percentage = Math.ceil((points/maxPossiblePoint)*100);

    let emoji;
    if (percentage === 100){
      emoji = "🎖️🏅"
    }else if (percentage > 80) {emoji = "🥇💪"
    }else if (percentage > 50){
      emoji = "🥈🦾"
    }else if (percentage < 50){
      emoji = "😒👎"
    }else if (percentage === 0){
      emoji = "🤦‍♂️🤦‍♂️"
    }
    
    
  return (
    <>
    <p className='result'>
       {emoji} you scored <strong>{points}</strong> out of {maxPossiblePoint} ({percentage}%)
    </p>
    <p className='highscore'>(Highscore: {highscore})</p>
    <button onClick={()=>dispatch({type : "re-start"})} className='btn btn-ui'>Restart</button>
    </>
    
  )
}

export default FinishedScreen