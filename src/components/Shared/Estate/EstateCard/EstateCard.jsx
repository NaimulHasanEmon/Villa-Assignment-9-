import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { TbChartAreaFilled } from "react-icons/tb";
import { FaMoneyBillAlt } from "react-icons/fa";
import { IoLocationSharp } from "react-icons/io5";
import { FaLocationArrow } from "react-icons/fa";
import "./EstateCard.css";

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
    <div className='relative card shadow-2xl mx-2 p-4 h-full'>
      <div className='bg-base-200 flex justify-center items-center rounded-xl mb-3'>
        <img className='rounded-t-xl mb-1' src={image} alt={estate_title} />
      </div>
      <div className='text-2xl font-bold'>
        <p>{estate_title}</p>
      </div>
      <div className='flex gap-5 justify-between'>
        <div className='text-lg'>
          <p>{description}</p>
        </div>
        <p className='font-semibold badge badge-dash badge-info'>
          {segment_name}
        </p>
      </div>
      {/* Rent / Sale */}
      <div className='absolute bottom-128 left-6 badge text-lg py-4 badge-success'>
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

      {/* Price */}
      <div className='flex gap-1 items-center text-lg font-semibold'>
        <div className='text-2xl text-emerald-500'>
          <FaMoneyBillAlt />
        </div>
        <p>{price}</p>
      </div>
      {/* Area */}
      <div className='flex gap-1 items-center font-semibold'>
        <div className='text-emerald-500 text-2xl'>
          <TbChartAreaFilled />
        </div>
        <p>{area}</p>
      </div>
      {/* Location */}
      <div className='flex gap-1 items-center font-semibold'>
        <div className='text-emerald-500 text-2xl'>
          <IoLocationSharp />
        </div>
        <div>
          <p>{location}</p>
        </div>
      </div>

      {/* Facilities */}
      <div className='grid grid-cols-2 gap-2 my-2'>
        {facilities.map((facility, idx) => (
          <div key={idx} className='badge badge-soft badge-accent font-semibold'>
            {facility}
          </div>
        ))}
      </div>

      {/* Blank div for flex-grow */}
      <div className='flex-grow'></div>

      {/* View Property Button */}
      <div className='relative mt-5 my-3'>
        <Link
          to={`/property/${id}`}
          className='pl-4 text-xl button-viewProperty w-52 flex items-center gap-2 hover:transition-all hover:duration-300 hover:translate-x-1 hover:-translate-y-1 ease-in-out'
        >
          <span className='py-1'>View Property</span>
          <div className='text-[#186650] mb-1'>
            <FaLocationArrow />
          </div>
        </Link>
      </div>
    </div>
  );
};

EstateCard.propTypes = {
  commData: PropTypes.object.isRequired,
};

export default EstateCard;
