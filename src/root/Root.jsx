import { Outlet } from "react-router-dom";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import Loader from "../components/Shared/Loader/Loader";

const Root = () => {
  const { loading } = useContext(AuthContext);

  if (loading) {
    return (
      <div className='flex h-screen justify-center items-center my-auto'>
        <Loader />
      </div>
    );
  }

  return (
    <div className='max-w-[380px] md:max-w-[700px] lg:max-w-6xl mx-auto'>
      <Header></Header>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Root;
