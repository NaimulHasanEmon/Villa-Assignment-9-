import { Link } from "react-router-dom";
import errorMatrix from "../../assets/image/ErrorPage/ErrorMatrix.jpg";
// import Header from "../Header/Header";

const ErrorPage = () => {
  return (
    <div>
      {/* <Header></Header> */}
      <div className='flex flex-col items-center bg-black justify-center'>
        {/* h-[633px] */}
        <div className=''>
          {/* Image */}
          <div className='flex justify-center'>
            <img src={errorMatrix} alt='' className='md:h-full lg:h-screen px-[2px] pt-19 md:pt-3 lg:pt-4 xl:pt-8' />
          </div>
          {/* Buttons */}
          <div className='fixed flex gap-40 md:gap-70 lg:gap-58 xl:gap-80 bottom-133 md:bottom-33 left-3 md:left-21 lg:bottom-28 lg:left-85 xl:bottom-[160px] xl:left-[450px] md:text-xl text-white uppercase font-bold'>
            <div>
              <Link
                to='/properties'
                className='bg-radial-[at_50%_75%] from-red-400 via-red-500 to-red-700 to-90% p-2 rounded-full px-2 md:px-5 py-3 shadow-2xl shadow-red-500'
              >
                Properties
              </Link>
            </div>
            <div>
              <Link
                to='/'
                className='bg-radial-[at_50%_75%] from-blue-400 via-blue-500 to-blue-700 to-90% p-2 rounded-full px-3 md:px-6 py-3 shadow-2xl shadow-blue-500'
              >
                Home page
              </Link>
            </div>
          </div>
          {/* Texts */}
          <div className='fixed top-48 md:top-50 lg:top-45 xl:top-[280px] left-0 px-5 md:px-20 lg:px-30'>
            <p className='error-oops text-[25px] md:text-[42px] lg:text-[40px] xl:text-6xl uppercase text-orange-600 text-center'>
              Oops! LOOKS LIKE THIS PAGE GOT LOST IN THE MATRIX.
            </p>
            <p className='text-xs lg:text-base xl:text-2xl text-white text-center lg:mt-2 xl:mt-5 error-description'>
              You take the blue pill, the story ends, you end up on our
              homepage, and believe whatever you want to believe. You take the
              red pill, you stay in wonderland, and I show you the properties.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
