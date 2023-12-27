import { useEffect, useReducer } from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import Loader from "./components/Loader";
import Error from "./components/Error";
import StarterScreen from "./components/StarterScreen";
import Question from "./components/Question";

function App() {
  

  const initialState = {
    questions: [],

    // loading, error, ready, active, finished
    status : "loading",
    index : 0,
    answer : null,
    points : 0,
  }

  function reducer(state, action) {
    console.log(state)

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
          ...state, status: "active"
        }  
      case "newAnswer":
        const question = state.questions.at(state.index)
        console.log(question)

        return{
          ...state, 
          answer: action.payload,
          points : action.payload === question.correctOption ? state.points + question.points : state.points,
        }  
      default:
        throw new Error ("data unknown")
    }
  }

  const [{questions, status, index, answer}, dispatch] = useReducer(reducer, initialState);
  const numQuestion = questions.length;
  useEffect(function () {
    fetch("http://localhost:9000/questions")
    .then(res=> res.json() )
    .then(data=> dispatch({type : "dataRecieved", payload: data}))
    .catch(()=>dispatch({type: "dataFailed"}))
  }, [])

  return (
    <div className="app">
      <Header/>
      <Main >
         {status === "loading" && <Loader/>}
         {status === "error" && <Error/>}
         {status === "ready" && <StarterScreen dispatch={dispatch} numQuestion={numQuestion}/>}
         {status === "active" && <Question question = {questions[index]} dispatch={dispatch} answer = {answer} />}
        
      </Main>
    </div>
  );
}

export default App;

