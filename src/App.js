import Header from "./components/Header";
import Main from "./components/Main";
import Loader from "./components/Loader";
import Error from "./components/Error";
import StarterScreen from "./components/StarterScreen";
import Question from "./components/Question";
import NextButton from "./components/NextButton";
import Progress from "./components/Progress";
import FinishedScreen from "./components/FinishedScreen";
import Footer from "./components/Footer";
import Timer from "./components/Timer";
import {  useQuiz } from "./QuizContext";

function App() {
  
  // const TIME_PER_QUESTION = 30
  // console.log(TIME_PER_QUESTION)
  // const initialState = {
  //   questions: [],

  //   // loading, error, ready, active, finished
  //   status : "loading",
  //   index : 0,
  //   answer : null,
  //   points : 0,
  //   highscore : 0,
  //   timeRemaining : null
  // }

  // function reducer(state, action) {
  //   console.log(state)

  //   switch (action.type) {
  //     case 'dataRecieved':
  //       return {
  //         ...state, questions: action.payload,
  //         status : "ready"
  //       }

  //     case "dataFailed":
  //       return{
  //         ...state, status : "error"
  //       }  
  //     case "start":
  //       return{
  //         ...state, status: "active",
  //         timeRemaining : state.questions.length * TIME_PER_QUESTION
  //       }  

  //     case "finished" :
  //       return{
  //         ...state, status : 'finished', 
  //         highscore : state.points > state.highscore ? state.points : state.highscore
  //       }
        
  //     case "tick":
  //       return{
  //         ...state, 
  //         timeRemaining : state.timeRemaining - 1,
  //         status : state.timeRemaining === 0 ? 'finished' : state.status
  //       }  
  //     case "newAnswer":
  //       const question = state.questions.at(state.index);
  //       console.log(question)

  //       return{
  //         ...state, 
  //         answer: action.payload,
  //         points : action.payload === question.correctOption ? state.points + question.points : state.points,
  //       }
        
  //     case "re-start":
  //       return{
  //         ...initialState, 
  //         questions : state.questions,
  //         status: "ready"
  //       }  

  //      case "nextQuestion":
  //       return{
  //         ...state, 
  //         index : state.index + 1,
  //         answer : null
  //       } 
  //     default:
  //       throw new Error ("data unknown")
  //   }
  // }

  // const [{questions, status, index, answer, points, highscore, timeRemaining}, dispatch] = useReducer(reducer, initialState);
  // console.log(questions)
  // const numQuestion = questions.length;
  // const maxPossiblePoint = questions.reduce((acc, cur) => { return acc + cur.points}, 0)

  // useEffect(function () {
  //   fetch("http://localhost:9000/questions")
  //   .then(res=> res.json() )
  //   .then(data=> dispatch({type : "dataRecieved", payload: data}))
  //   .catch(()=>dispatch({type: "dataFailed"}))
  // }, [])
  const {status, } = useQuiz()

  return (
    <div className="app">
      <Header/>
      <Main >

         {status === "loading" && <Loader/>}
         {status === "error" && <Error/>}
         {status === "ready" && <StarterScreen />}
         {status === "active" && 
         <>
         <Progress />
         <Question  />
         <Footer>
            <Timer />
            <NextButton />
         </Footer>
          </>
          }
          {status === 'finished' && <FinishedScreen/>} 


      </Main>
    </div>
  );
}

export default App;

