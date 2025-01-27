import { Link } from "react-router-dom";
import error404 from "../../../public/Image/Illustrations/404.svg";
import crossError from "../../../public/Image/Illustrations/CrossError.svg";

const ErrorPage = () => {
  return (
    <div className="flex flex-col items-center justify-center my-20">
      <div className='flex justify-center'>
        <div>
          <img className='h-96' src={error404} alt='' />
        </div>
        <div>
          <img className='h-96' src={crossError} alt='' />
        </div>
      </div>
      <div className="mt-20">
        <Link to='/' className="btn btn-accent">Home</Link>
      </div>
    </div>
  );
};

export default ErrorPage;
