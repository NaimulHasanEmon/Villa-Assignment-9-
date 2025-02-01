import { useLoaderData } from "react-router-dom";
import Loader from "../Loader/Loader";
import { IoLocationSharp } from "react-icons/io5";
import { PiLineSegmentsBold } from "react-icons/pi";
import { TbChartAreaFilled } from "react-icons/tb";
import { FaMoneyBillAlt } from "react-icons/fa";
import { BsTelephone } from "react-icons/bs";
import PropertyMap from "../PropertyMap/PropertyMap";

const PropertyDetails = () => {
  const selectProperty = useLoaderData();

  window.scrollTo({ top: 0, behavior: "smooth" });

  if (!selectProperty) {
    return (
      <div>
        <Loader />
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
    coordinates,
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
              <p className='badge badge-success mt-3 font-semibold'>{status}</p>
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
          <div className='xl:gap-2 my-2'>
            {facilities.map((facility, idx) => (
              <div key={idx} className='badge badge-accent font-semibold'>
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
              {typeof price === "string" && price.includes("/") ? (
                <>
                  {price.split("/")[0]}
                  <span className='text-5xl'>/</span>
                  <span className='text-3xl font-semibold'>
                    {price.split("/").slice(1).join("/")}
                  </span>
                </>
              ) : (
                price
              )}
            </p>
          </div>
        </div>
      </div>

      {/* Image and Contact Section */}
      <div className='flex gap-5 mt-10 justify-center'>
        <div className='w-350'>
          <img
            src={image}
            alt={estate_title}
            className='rounded-lg shadow-xl'
          />
        </div>

        {/* Contact Owner */}
        <div className='shadow-2xl px-10 py-5 rounded-xl bg-base-100'>
          <div className='flex gap-4 items-center'>
            <div className='avatar'>
              <div className='w-20 rounded-full'>
                <img src={owner_image} alt={owner_name} />
              </div>
            </div>
            <div>
              <h2 className='text-2xl font-bold'>{owner_name}</h2>
              <p className='flex items-center gap-2 text-gray-600'>
                <BsTelephone />
                {mobile_number}
              </p>
            </div>
          </div>

          <form className='mt-6 space-y-4'>
            <input
              type='text'
              placeholder='Your Name'
              className='input input-bordered w-full'
              required
            />
            <textarea
              placeholder='Your Message'
              className='textarea textarea-bordered w-full h-32'
              required
            ></textarea>
            <button className='btn btn-primary w-full'>Send Message</button>
          </form>
        </div>
      </div>

      {/* property details and map */}
      <div className="flex gap-10 mt-8">
        {/* Property Description */}
        <div className='w-2/3'>
          <h2 className='text-3xl font-bold mb-4'>Property Description</h2>
          <div className='text-lg whitespace-pre-line'>
            {description_detail}
          </div>
        </div>
        {/* Map */}
        <div className="w-1/3">
          <PropertyMap coordinates={coordinates}></PropertyMap>
        </div>
      </div>
    </div>
  );
};

export default PropertyDetails;
