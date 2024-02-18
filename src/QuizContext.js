import { createContext, useContext } from "react";
import { useEffect, useReducer } from "react";


const TIME_PER_QUESTION = 30
  console.log(TIME_PER_QUESTION)
  const initialState = {
    questions: [],

    // loading, error, ready, active, finished
    status : "loading",
    index : 0,
    answer : null,
    points : 0,
    highscore : 0,
    timeRemaining : null
  }

  
const QuizContext = createContext()

function QuizProvider({children}) {

    function reducer(state, action) {
        const question = state.questions.at(state.index);

    
        switch (action.type) {
          case 'dataRecieved':
            return {
              ...state, questions: action.payload,
              status : "ready"
            }
    
          case "dataFailed":
            return{
              ...state, status : "error"
            }  
          case "start":
            return{
              ...state, status: "active",
              timeRemaining : state.questions.length * TIME_PER_QUESTION
            }  
    
          case "finished" :
            return{
              ...state, status : 'finished', 
              highscore : state.points > state.highscore ? state.points : state.highscore
            }
            
          case "tick":
            return{
              ...state, 
              timeRemaining : state.timeRemaining - 1,
              status : state.timeRemaining === 0 ? 'finished' : state.status
            }  
          case "newAnswer":
    
            return{
              ...state, 
              answer: action.payload,
              points : action.payload === question.correctOption ? state.points + question.points : state.points,
            }
            
          case "re-start":
            return{
              ...initialState, 
              questions : state.questions,
              status: "ready"
            }  
    
           case "nextQuestion":
            return{
              ...state, 
              index : state.index + 1,
              answer : null
            } 
          default:
            throw new Error ("data unknown")
        }
      } 
    
      const [{questions, status, index, answer, points, highscore, timeRemaining}, dispatch] = useReducer(reducer, initialState);
      const numQuestion = questions.length;
      const maxPossiblePoint = questions.reduce((acc, cur) => { return acc + cur.points}, 0)
    
      useEffect(function () {
        fetch("http://localhost:9000/questions")
        .then(res=> res.json() )
        .then(data=> dispatch({type : "dataRecieved", payload: data}))
        .catch(()=>dispatch({type: "dataFailed"}))
      }, [])
    
    return <QuizContext.Provider 
    value={
        {   status, 
            numQuestion, 
            dispatch, 
            answer,
            index, 
            points, 
            maxPossiblePoint,
            timeRemaining,
            highscore,
            questions,
            
            
         }}>
            {children}
    </QuizContext.Provider>
}


function useQuiz() {
    const context = useContext(QuizContext)
    if (context === undefined) throw new Error("useQuiz is called outside the QuizProvider")
    return context
}

export {QuizProvider, useQuiz, }