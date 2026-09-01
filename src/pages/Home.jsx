import { useEffect, useState } from "react"
import fetchAdvise from "../components/fetchApi"
import AdviseCard from "../components/AdviseCard"

const Home = () => {
const [advise, setAdvise] = useState({});

useEffect(() => {
  const getAdvise = async () => {
    const data = await fetchAdvise();
    console.log("DATA:", data);
    setAdvise(data);
  };

  getAdvise();
}, []);
  return (
    <div>
      <h1>Home</h1>
      <AdviseCard advise={advise} />
    </div>
  )
}

export default Home
