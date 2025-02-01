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
      <div className='flex justify-center items-center min-h-screen'>
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
    <div className='container mx-auto px-2 md:px-4 md:my-12'>
      {/* Upper Section */}
      <div className='flex flex-col md:flex-row shadow-lg rounded border-2 border-base-300'>
        {/* First upper part */}
        <div className='md:pr-5 border-b-2 md:border-r-2 md:border-b-0 border-gray-400 p-2 md:p-4'>
          <div className='flex xl:flex-nowrap gap-2 items-center'>
            <h1 className='text-xl md:text-2xl lg:text-3xl font-bold'>
              {estate_title}
            </h1>
            <span className='badge badge-success text-xs md:text-base font-semibold'>{status}</span>
          </div>
          {/* segment & location */}
          <div className='mt-4 space-y-2'>
            <div className='flex gap-1 items-center font-semibold'>
              <PiLineSegmentsBold className='text-lg text-emerald-500' />
              <span className='text-sm md:text-base'>{segment_name}</span>
            </div>
            <div className='flex gap-1 items-center font-semibold'>
              <IoLocationSharp className='text-lg md:text-3xl lg:text-xl text-emerald-500' />
              <span className='text-sm md:text-base'>{location}</span>
            </div>
          </div>
        </div>

        {/* Second upper part */}
        <div className='md:pr-5 border-b-2 md:border-r-2 md:border-b-0 flex flex-col justify-center p-2 md:p-4 border-gray-400'>
          <div className='flex gap-1 items-center font-semibold'>
            <TbChartAreaFilled className='text-xl text-emerald-500' />
            <span>{area}</span>
          </div>

          <div className='flex flex-wrap gap-1 mt-2'>
            {facilities.map((facility, idx) => (
              <div key={idx} className='badge badge-accent text-xs md:text-base font-semibold'>
                {facility}
              </div>
            ))}
          </div>
        </div>

        {/* Third upper part */}
        <div className='flex items-center p-2 md:p-4'>
          <div className='flex items-center gap-2'>
            <FaMoneyBillAlt className='text-3xl md:text-4xl lg:text-5xl text-emerald-500' />
            <p className='text-2xl md:text-3xl lg:text-4xl font-bold'>
              {typeof price === "string" && price.includes("/") ? (
                <>
                  {price.split("/")[0]}
                  <span className='mx-1'>/</span>
                  <span className='text-xl md:text-2xl lg:text-3xl'>
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
      <div className='flex flex-col lg:flex-row gap-3 md:gap-6 mt-4 md:mt-8 items-start'>
        {/* Property Image */}
        <div className='w-full lg:w-2/3'>
          <img
            src={image}
            alt={estate_title}
            className='w-full h-auto rounded-lg shadow-xl object-cover'
          />
        </div>

        {/* Contact Owner */}
        <div className='w-full lg:w-1/3 shadow-2xl p-2 md:p-4 lg:p-6 rounded-xl bg-base-100'>
          {/* Owner photo, name and phone */}
          <div className='flex gap-4'>
            <div className='avatar'>
              <div className='w-14 md:w-16 rounded-lg'>
                <img src={owner_image} alt={owner_name} />
              </div>
            </div>
            <div>
              <h2 className='md:text-xl xl:text-2xl font-bold'>{owner_name}</h2>
              <p className='flex text-xs md:text-sm items-center gap-1 md:gap-2 text-gray-600'>
                <BsTelephone />
                {mobile_number}
              </p>
            </div>
          </div>

          {/* Owner contact form */}
          <form className='mt-3 md:mt-6 space-y-2 md:space-y-4'>
            <input
              type='text'
              placeholder='Your Name'
              className='input input-bordered w-full'
              required
            />
            <textarea
              placeholder='Your Message'
              className='textarea textarea-bordered w-full xl:h-25'
              required
            ></textarea>
            <button className='btn btn-primary h-8 mdh-10 w-full'>Send Message</button>
          </form>
        </div>
      </div>

      {/* property details and map */}
      <div className='flex flex-col lg:flex-row gap-6 mt-8'>
        {/* Property Description */}
        <div className='w-full lg:w-2/3'>
          <p className='text-2xl md:text-3xl propertyDescription-bold mb-4'>
            Property Description
          </p>
          <div className='text-base md:text-lg propertyDescription-medium whitespace-pre-line'>
            {description_detail}
          </div>
        </div>
        {/* Map */}
        <div className='w-full lg:w-1/3'>
          <PropertyMap coordinates={coordinates} />
        </div>
      </div>
    </div>
  );
};

export default PropertyDetails;
