import { useEffect } from "react"
import fetchAdvise from "../components/fetchApi"

const Home = () => {
 
  useEffect(()=>{
  fetchAdvise()
  },[])
  
  return (
    <div>
      <h1>Home</h1>
    </div>
  )
}

export default Home
