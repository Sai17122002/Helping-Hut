import { useEffect, useState } from "react";
import headerBackground1 from "../image/hslide1.jpg";
import headerBackground2 from "../image/hslide2.jpeg";
import headerBackground3 from "../image/hslide3.jpg";
import headerBackground4 from "../image/hslide4.jpg";
import headerBackground5 from "../image/hslide5.jpg";

const Home = () => {
  const images = [
    headerBackground1,
    headerBackground2,
    headerBackground3,
    headerBackground4,
    headerBackground5,
  ];
  const [num, setNum] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setNum((prev) => ++prev % images.length);
    }, 2300);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <section className="home" id="home">
      <div className="home-background">
        <img src={images[num]} alt="Helping Hut Images" />
      </div>
    </section>
  );
};

export default Home;
