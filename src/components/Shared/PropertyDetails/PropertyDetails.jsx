import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import Loader from "../Loader/Loader";
import { IoLocationSharp } from "react-icons/io5";
import { PiLineSegmentsBold } from "react-icons/pi";
import { TbChartAreaFilled } from "react-icons/tb";
import { FaMoneyBillAlt } from "react-icons/fa";
// import Slider from "../Slider/Slider";
import { BsTelephone } from "react-icons/bs";

const PropertyDetails = () => {
  const propertyItem = useLoaderData();
  const { id } = useParams();
  const [selectProperty, setSelectProperty] = useState(null);

  useEffect(() => {
    const property = propertyItem.find((p) => p.id === parseInt(id));
    setSelectProperty(property);
  }, [propertyItem, id]);

  if (!selectProperty) {
    return (
      <div>
        <Loader></Loader>
        {/* Loading... */}
      </div>
    );
  }

  const {
    estate_title,
    segment_name,
    price,
    status,
    area,
    location,
    facilities,
    image,
    owner_name,
    mobile_number,
    owner_image,
    description_detail,
  } = selectProperty;

  return (
    <div className='my-12'>
      {/* Upper Section */}
      <div className='flex gap-5 p-5 shadow-lg rounded border-2 border-base-300'>
        {/* First upper part */}
        <div className='pr-5 border-r-2 border-gray-400'>
          <div className='flex gap-1'>
            <div>
              <p className='text-4xl font-bold'>{estate_title}</p>
            </div>
            <div>
              <p className='badge badge badge-success mt-3 font-semibold'>
                {status}
              </p>
            </div>
          </div>
          {/* Segment / Type */}
          <div className='flex gap-1 items-center font-semibold'>
            <div className='text-lg lg:text-xl text-emerald-500'>
              <PiLineSegmentsBold />
            </div>
            <div>
              <p>{segment_name}</p>
            </div>
          </div>
          {/* Location */}
          <div className='flex gap-1 items-center font-semibold'>
            <div className='text-lg lg:text-xl text-emerald-500'>
              <IoLocationSharp />
            </div>
            <div>
              <p>{location}</p>
            </div>
          </div>
        </div>
        {/* Second upper part */}
        <div className='pr-5 border-r-2 border-gray-400'>
          {/* Area */}
          <div className='flex gap-1 items-center font-semibold'>
            <div className='text-xl lg:text-2xl text-emerald-500'>
              <TbChartAreaFilled />
            </div>
            <p>{area}</p>
          </div>

          {/* Facilities */}
          <div className=' xl:gap-2 my-2'>
            {facilities.map((facility, idx) => (
              <div
                key={idx}
                className='badge badge-soft badge-accent font-semibold'
              >
                {facility}
              </div>
            ))}
          </div>
        </div>
        {/* Third upper part */}
        <div>
          {/* Price */}
          <div className='flex gap-1 items-center text-base lg:text-lg'>
            <div className='text-xl lg:text-6xl text-emerald-500'>
              <FaMoneyBillAlt />
            </div>
            <p className='text-5xl pb-1'>
              {price}
              <span>
                {status === "rent" && (
                  <>
                    /<span className='text-3xl font-semibold'>month</span>
                  </>
                )}
              </span>
            </p>
          </div>
        </div>
      </div>

      {/* Image and  */}
      <div className='flex gap-5 mt-10 justify-center'>
        {/* Add Slider Here */}
        <div className='w-204'>
          <img src={image} alt={estate_title} title={estate_title} />
        </div>

        {/* Contact Owner */}
        <div className='shadow-2xl px-10 py-5 rounded-xl'>
          <div>
            {/* Owner Info */}
            <div className='flex gap-2'>
              <div className='avatar'>
                <div className='w-20 rounded'>
                  <img src={owner_image} />
                </div>
              </div>
              <div>
                <p className='text-xl font-semibold'>{owner_name}</p>
                <p className='flex text-gray-500 items-center gap-1'>
                  <BsTelephone />
                  <span>{mobile_number}</span>
                </p>
              </div>
            </div>

            {/* Form */}
            <div className='my-5'>
              <form className='flex flex-col gap-2'>
                <input
                  className='w-full border border-gray-300 rounded-md px-3 py-2 mt-1 text-sm focus:outline-none focus:ring-2 focus:ring-gray-400'
                  type='text'
                  name='name'
                  required
                  placeholder='Enter your name'
                />
                <textarea
                  className='w-full h-35 border border-gray-300 rounded-md px-3 py-2 mt-1 text-sm focus:outline-none focus:ring-2 focus:ring-gray-400'
                  type='text'
                  name='message'
                  required
                  placeholder='Enter your message'
                />
              </form>
            </div>

            {/* Button */}
            <div>
              <button className='btn btn-accent uppercase w-full'>
                Send Message
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Property Description */}
      <div className='mt-8'>
        <div>
          <p className='text-[28px] font-bold mb-2'>Property Description</p>
        </div>
        <div>
          <p className="text-lg">{description_detail}</p>
        </div>
      </div>
    </div>
  );
};

export default PropertyDetails;
