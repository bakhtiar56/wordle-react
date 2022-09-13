import {useContext} from 'react'
import { AppContext } from '../App'

export default function Key({keyVal,bigKey}) {

    const {onSelectLetter,onDelete,onEnter}=useContext(AppContext)

    function selectLetter(){
        if(keyVal==="ENTER"){
          onEnter()
        }
        else if(keyVal==="DELETE"){
            onDelete()
        }

        else{
      onSelectLetter(keyVal)
    }
    }

  return (
    <div className="key" id={bigKey && "big"} onClick={selectLetter}>
        {keyVal}
    </div>
  )
}
