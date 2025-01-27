import { useLoaderData } from "react-router-dom";
import Slider from "../Slider/Slider";

const Home = () => {
  const sliderInfo = useLoaderData();

  return (
    <div>
      <div className="my-10">
        <Slider sliderInfo={sliderInfo}></Slider>
      </div>
    </div>
  );
};

export default Home;
