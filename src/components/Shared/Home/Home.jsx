import { useLoaderData } from "react-router-dom";
import Banner from "../Banner/Banner";

const Home = () => {
  const bannerInfo = useLoaderData();

  return (
    <div>
      <Banner bannerInfo={bannerInfo}></Banner>
    </div>
  );
};

export default Home;
