import { useLoaderData } from "react-router-dom";
import Slider from "../Slider/Slider";
import EstateContainer from "../Estate/EstateContainer/EstateContainer";

const Home = () => {
  const commercialData = useLoaderData();

  return (
    <div>
      <div className='mb-10'>
      <Slider commercialData={commercialData}></Slider>
      </div>
      <div>
        <EstateContainer commercialData={commercialData}></EstateContainer>
      </div>
    </div>
  );
};

export default Home;
