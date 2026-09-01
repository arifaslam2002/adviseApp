import { useEffect, useState } from "react";
import fetchAdvise from "../components/fetchApi";
import AdviseCard from "../components/AdviseCard";
import backgroundImage from "../assets/back2.jpg";
const rainSound = new Audio("/rain.mp3");
rainSound.loop = true;
rainSound.volume = 0.3;
const playRain = () => {
  rainSound.play();
};
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
<div
  className="min-h-screen w-full bg-cover bg-center flex flex-col items-center justify-center"
  style={{
    backgroundImage: `url(${backgroundImage})`,
  }}
>  <div className="pointer-events-none absolute inset-0 overflow-hidden">
  {Array.from({ length: 300 }).map((_, index) => (
    <span
      key={index}
      className="rain"
      style={{
        left: `${Math.random() * 100}%`,
        animationDuration: `${0.5 + Math.random() * 0.8}s`,
        animationDelay: `${Math.random() * 2}s`,
        height: `${15 + Math.random() * 25}px`,
      }}
    />
  ))}
</div>
      <h1 className="mb-3 text-center text-5xl font-extrabold tracking-tight text-gray-900">
  A Little <span className="text-blue-600">Wisdom</span> for You
</h1>

<p className="mb-10 text-center text-2xl  text-red-500">
  Discover a new thought to inspire your day.
</p>

      <div className="w-full flex justify-center px-4">
        <AdviseCard advise={advise} loading={loading} getAdvise={getAdvise}  playRain={playRain}/>
      </div>
    </div>
  );
};

export default Home;
