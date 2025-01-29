import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import Loader from "../Loader/Loader";
import { IoLocationSharp } from "react-icons/io5";
import { PiLineSegmentsBold } from "react-icons/pi";

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
      <div>
        <div className='flex gap-1'>
          <div>
            <p className='text-4xl font-bold'>{estate_title}</p>
          </div>
          <div>
            <div className='badge badge badge-accent font-semibold'>{status}</div>
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
    </div>
  );
};

export default PropertyDetails;
