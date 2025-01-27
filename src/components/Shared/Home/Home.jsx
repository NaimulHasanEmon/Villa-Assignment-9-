import { useLoaderData } from "react-router-dom";
import Slider from "../Slider/Slider";
import EstateContainer from "../Estate/EstateContainer/EstateContainer";

const Home = () => {
  const sliderInfo = useLoaderData();

  return (
    <div>
      <div className="mb-10">
        <Slider sliderInfo={sliderInfo}></Slider>
      </div>
      <div>
        <EstateContainer></EstateContainer>
      </div>
    </div>
  );
};

export default Home;
