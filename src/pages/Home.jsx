import { useEffect, useState } from "react";
import fetchAdvise from "../components/fetchApi";
import AdviseCard from "../components/AdviseCard";

const Home = () => {
  const [advise, setAdvise] = useState({});

  useEffect(() => {
    const getAdvise = async () => {
      const data = await fetchAdvise();
      setAdvise(data);
    };

    getAdvise();
  }, []);

  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center bg-gray-100">
      <h1 className="text-4xl font-bold text-gray-800 mb-8">
        Thought of the Day
      </h1>

      <div className="w-full flex justify-center px-4">
        <AdviseCard advise={advise} />
      </div>
    </div>
  );
};

export default Home;