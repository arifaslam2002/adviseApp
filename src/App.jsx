import { useEffect } from "react"
import fetchAdvise from "./components/fetchApi"

const App = () => {
 
  useEffect(()=>{
  fetchAdvise()
  },[])
  
  return (
    <div>
      <h1>App</h1>
    </div>
  )
}

export default App
