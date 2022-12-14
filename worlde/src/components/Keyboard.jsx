import {useCallback, useEffect,useContext} from 'react'
import Key from './Key'
import { AppContext } from '../App'

export default function Keyboard() {

  const {onEnter,onSelectletter,onDelete}=useContext(AppContext)

  const keys1=["Q","W","E","R","T","Y","U","I","O","P"]
  const keys2=["A","S","D","F","G","H","H","K","L"]
  const keys3=["Z","X","C","V","B","N","M"]

  const handleKeyboard=useCallback((event)=>{
    if(event.key==="Enter"){
      onEnter()


    }else if(event.key==="Backspace"){
        onDelete()
    }
    else{
      keys1.forEach((key)=>{
        if(event.key.toLowerCase()===key.toLowerCase()){
          onSelectletter(key)
        }
      })
      keys2.forEach((key)=>{
        if(event.key.toLowerCase()===key.toLowerCase()){
          onSelectletter(key)
        }
      })
      keys3.forEach((key)=>{
        if(event.key.toLowerCase()===key.toLowerCase()){
          onSelectletter(key)
        }
      })
    }
  })


  useEffect(()=>{
    document.addEventListener("keydown",handleKeyboard)



    return( document.addEventListener("keydown",handleKeyboard)
    )
  },[handleKeyboard])

    
  return (
    <div className="keyboard" onKeyDown={handleKeyboard}>
      <div className="line1">{
        keys1.map((key)=>{
          return(
            <div>
              <Key keyVal={key}/>
            </div>
          )
        })
      }</div>
      <div className="line2">
      {
        keys2.map((key)=>{
          return(
            <div><Key keyVal={key}/></div>
          )
        })
      }
      </div>
      <div className="line3">
        <Key keyVal={"ENTER"} bigKey/>
      {
        keys3.map((key)=>{
          return(
            <div>
              <Key keyVal={key}/></div>
          )
        })
      }
        <Key keyVal={"DELETE"} bigKey/>

      </div>

    </div>
  )
}
