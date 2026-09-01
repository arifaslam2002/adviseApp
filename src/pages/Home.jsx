import { useEffect, useState } from "react";
import fetchAdvise from "../components/fetchApi";
import AdviseCard from "../components/AdviseCard";

const Home = () => {
  const [advise, setAdvise] = useState({});
  const [loading, setloading] = useState(false);
  const getAdvise = async () => {
    setloading(true);
    const data = await fetchAdvise();
    setAdvise(data);
    setloading(false);
  };
  useEffect(() => {
    getAdvise();
  }, []);

  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center bg-gray-100">
      <h1 className="mb-3 text-center text-5xl font-extrabold tracking-tight text-gray-900">
  A Little <span className="text-blue-600">Wisdom</span> for You
</h1>

<p className="mb-10 text-center text-gray-500">
  Discover a new thought to inspire your day.
</p>

      <div className="w-full flex justify-center px-4">
        <AdviseCard advise={advise} loading={loading} getAdvise={getAdvise} />
      </div>
    </div>
  );
};

export default Home;
