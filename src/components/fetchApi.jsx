import axios from "axios"
const  fetchAdvise = async()=>{
 const response = await axios.get("https://api.adviceslip.com/advice")
 console.log(response.data.slip.advice);
} 
export default fetchAdvise