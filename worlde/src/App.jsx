import { useState,createContext ,useEffect} from 'react'
import './App.css'
import Board from './components/Board'
import Keyboard from './components/Keyboard'
import { boardDefault,generateWord } from './Words'


export const AppContext=createContext()



function App() {
const [board,setBoard]=useState(boardDefault)
const [currAttempt,setCurrAttempt]=useState({attempt:0,letterPos:0})
const [word,setWord]=useState("")



const correctWord="RIGHT"

useEffect(()=>{
  const word=generateWord().then((res)=>{
    setWord(word)
  })
  
},[])



const onSelectLetter=(keyVal)=>{
  if(currAttempt.letterPos>4){return;}
  const newBoard=[...board];
  newBoard[currAttempt.attempt][currAttempt.letterPos]=keyVal;
  setBoard(newBoard)
  setCurrAttempt({...currAttempt,letterPos:currAttempt.letterPos+1})
  }


const onDelete=()=>{
  if(currAttempt.letterPos===0){return}
  const newBoard=[...board];
newBoard[currAttempt.attempt][currAttempt.letterPos-1]="";
setBoard(newBoard)
setCurrAttempt({...currAttempt,letterPos:currAttempt.letterPos-1})
}

async function checkWordValid(word){
  const res=await fetch(`https://thatwordleapi.azurewebsites.net/ask/?word=${word}`)
  const data=await res.json()
  return data.Response
} 
const onEnter=()=>{
  if(currAttempt.letterPos!==5){return;}

  let currWord=""

  for(let i=0;i<5;i++){
    currWord+=board[currAttempt.attempt][i]
  }
  if(checkWordValid(currWord)){
    setCurrAttempt({attempt:currAttempt.attempt+1,letterPos:0}) 
  }
  else{
    alert("Not a word")
  }
  }
  

             





  return (
    <div className="App">
    <nav>
      <h1>Wordle</h1>
    </nav>
    <AppContext.Provider value={{board,setBoard,currAttempt,setCurrAttempt,onSelectLetter,onDelete,onEnter,correctWord}}>
      <div className="game">
    <Board />
    <Keyboard />
    </div>
    </AppContext.Provider>
    </div>
  )
}

export default App
