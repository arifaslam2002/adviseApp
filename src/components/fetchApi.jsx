import axios from "axios";

const fetchAdvise = async () => {
  const response = await axios.get(
    "https://api.adviceslip.com/advice"
  );

  return response.data.slip;
};

export default fetchAdvise;