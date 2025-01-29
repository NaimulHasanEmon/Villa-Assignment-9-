import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import Loader from "../Loader/Loader";
import { IoLocationSharp } from "react-icons/io5";
import { PiLineSegmentsBold } from "react-icons/pi";
import { TbChartAreaFilled } from "react-icons/tb";
import { FaMoneyBillAlt } from "react-icons/fa";

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
    description,
    price,
    status,
    area,
    location,
    facilities,
    image,
  } = selectProperty;

  return (
    <div>
      {/* Upper Section */}
      <div className='flex gap-5 p-5 my-5 shadow-xl rounded-2xl border-2 border-base-300'>
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
            <div className='text-xl lg:text-2xl text-emerald-500'>
              <FaMoneyBillAlt />
            </div>
            <p className='text-5xl'>
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
    </div>
  );
};

export default PropertyDetails;
