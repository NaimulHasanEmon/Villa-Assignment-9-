import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const EstateCard = ({ commData }) => {
  const {
    id,
    estate_title,
    segment_name,
    description,
    price,
    status,
    area,
    location,
    facilities,
    image,
  } = commData;
  return (
    <div className='relative card shadow-2xl mx-4 p-4 h-full'>
      <div className='bg-base-200 flex justify-center items-center rounded-xl mb-3'>
        <img className='rounded-t-xl my-3' src={image} alt={estate_title} />
      </div>
      <div className='text-2xl font-bold'>
        <p>{estate_title}</p>
      </div>
      <div className='flex gap-5 justify-between'>
        <div className=''>
          <p>{description}</p>
        </div>
        <p className='font-semibold badge badge-dash badge-info'>
          {segment_name}
        </p>
      </div>
      <div className='text-lg font-semibold'>
        <p>{price}</p>
      </div>
      <div className='absolute bottom-90 left-8 badge text-lg py-5 badge-success'>
        {/* For bottom, bottom-41 */}
        <svg
          className='size-[1em]'
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 24 24'
        >
          <g fill='currentColor' strokeLinejoin='miter' strokeLinecap='butt'>
            <circle
              cx='12'
              cy='12'
              r='10'
              fill='none'
              stroke='currentColor'
              strokeLinecap='square'
              strokeWidth='2'
            ></circle>
            <polyline
              points='7 13 10 16 17 8'
              fill='none'
              stroke='currentColor'
              strokeLinecap='square'
              strokeWidth='2'
            ></polyline>
          </g>
        </svg>
        {status}
      </div>
      <div>
        <p>{area}</p>
      </div>

      <div className='mt-3'>
        <Link
          to={`/property/${id}`}
          className='p-2 rounded-lg text-lg bg-cyan-500 text-white font-semibold'
        >
          View Property
        </Link>
      </div>
    </div>
  );
};

EstateCard.propTypes = {
  commData: PropTypes.object.isRequired,
};

export default EstateCard;
