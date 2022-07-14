
import React,{useState} from 'react'

const App = () => {
  const[show,setShow]=useState(true)
  const[main,setMain]=useState(false)
  const[minmax,setMinmax]=useState(false)
  
  return (
    <div>
   { show?<><button type="button" onClick={()=>{setShow(false);setMain(true)}}>main</button></>: null}
   { main?<><button type="button" onClick={()=>{setShow(true);setMain(false);setMinmax(false)}}>cut</button><button type="button" onClick={()=>{setMinmax(true);setMain(false)}}>min</button><div>screen1</div></>:null   }
   {minmax?<><button type="button" onClick={()=>{setShow(true);setMain(false);setMinmax(false)}}>cut</button><button type="button" onClick={()=>{setMinmax(false);setMain(true)}}>max</button><div>screen2</div></>:null}
    </div>
  )
}

export default App