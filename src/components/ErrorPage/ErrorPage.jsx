import { Link } from "react-router-dom";
// import error404 from "../../../public/Image/Illustrations/404.svg";
// import crossError from "../../../public/Image/Illustrations/CrossError.svg";
// import errorMatrix1 from '../../../public/Image/ErrorPage/ErrorMatrix1.png';
import errorMatrix2 from "../../../public/Image/ErrorPage/ErrorMatrix2.jpg";
// import Header from "../Header/Header";

const ErrorPage = () => {
  return (
    <div>
      {/* <Header></Header> */}
      <div className='relative flex flex-col items-center bg-black justify-center'>
        {/* h-[633px] */}
        {/* <div className='flex justify-center'>
          <div>
            <img className='h-96' src={error404} alt='' />
          </div>
          <div>
            <img className='h-96' src={crossError} alt='' />
          </div>
        </div> */}
        <div className=''>
          {/* Image */}
          <div className='flex justify-center'>
            <img src={errorMatrix2} alt='' className='h-screen' />
          </div>
          {/* Buttons */}
          <div className='flex gap-80 fixed bottom-[160px] text-xl text-white uppercase font-bold left-[450px]'>
            <div>
              <Link
                to='/properties'
                className='bg-radial-[at_50%_75%] from-red-400 via-red-500 to-red-700 to-90% p-2 rounded-full px-5 py-3 shadow-2xl shadow-red-500'
              >
                Properties
              </Link>
            </div>
            <div>
              <Link
                to='/'
                className='bg-radial-[at_50%_75%] from-blue-400 via-blue-500 to-blue-700 to-90% p-2 rounded-full px-6 py-3 shadow-2xl shadow-blue-500'
              >
                Home page
              </Link>
            </div>
          </div>
          {/* Texts */}
          <div className='fixed top-[280px] left-0 px-40'>
            <p className='error-oops text-6xl uppercase text-orange-600 text-center'>
              Oops! LOOKS LIKE THIS PAGE GOT LOST IN THE MATRIX.
            </p>
            <p className='text-2xl text-white text-center mt-5 error-description'>
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
