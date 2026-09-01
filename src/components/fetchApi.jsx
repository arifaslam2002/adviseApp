import axios from "axios";

const fetchAdvise = async () => {
  const response = await axios.get(
    "https://api.adviceslip.com/advice"
  );

  console.log("API RESPONSE:", response.data);

  return response.data.slip;
};

export default fetchAdvise;