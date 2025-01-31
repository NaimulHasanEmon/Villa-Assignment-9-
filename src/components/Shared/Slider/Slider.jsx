import { useState, useEffect } from "react";
import AwesomeSlider from "react-awesome-slider";
import "react-awesome-slider/dist/styles.css";
import withAutoplay from "react-awesome-slider/dist/autoplay";
import PropTypes from "prop-types";
import "./Slider.css";
import { Link } from "react-router-dom";
import { FaLocationArrow } from "react-icons/fa";

const AutoplaySlider = withAutoplay(AwesomeSlider);

const Slider = ({ commercialData }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % commercialData.length);
    }, 5000); // Match the interval with the slider interval

    return () => clearInterval(interval);
  }, [commercialData.length]);

  // const id = commercialData[0].id;
  // console.log(id);

  return (
    <div className='relative'>
      <AutoplaySlider
        className='h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] xl:h-[700px] 2xl:h-[800px]'
        play={true}
        interval={5000} // Interval between slides
        infinite={true}
        bullets={false} // Add this line to remove the dots
        buttons={false} // Add this line to remove the arrows
        onTransitionEnd={(event) => setCurrentSlide(event.currentIndex)}
      >
        {commercialData.map((property, idx) => (
          <div key={idx}>
            <img
              src={property.slider_image}
              className='h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] xl:h-[700px] 2xl:h-[800px] contrast-150 opacity-40 w-full object-cover'
              alt={property.estate_title}
            />
            <div
              className={`absolute bottom-10 left-5 sm:bottom-20 sm:left-10 md:bottom-20 md:left-20 lg:bottom-20 lg:left-20 xl:bottom-20 xl:left-20 2xl:bottom-20 2xl:left-20 text-white z-50 pr-10 sm:pr-20 md:pr-40 lg:pr-[500px] xl:pr-[500px] 2xl:pr-[500px] ${
                currentSlide === idx ? "animate-slide-up" : ""
              }`}
            >
              <p className='text-sm sm:text-lg md:text-2xl lg:text-4xl xl:text-5xl 2xl:text-5xl slide-info-bold'>
                {property.slider_info}
              </p>
              <div className='relative mt-5 sm:mt-10'>
                <Link
                  to={`/property/${property.id}`}
                  className='pl-2 sm:pl-4 text-sm sm:text-base md:text-lg lg:text-lg xl:text-xl button-exploreMore w-32 sm:w-40 md:w-48 lg:w-48 xl:w-52 flex items-center gap-2 hover:transition-all hover:duration-300 hover:translate-x-1 hover:-translate-y-1 ease-in-out'
                >
                  <span className='py-1'>Explore More</span>
                  <div className='text-teal-600 mb-1'>
                    <FaLocationArrow />
                  </div>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </AutoplaySlider>
    </div>
  );
};

Slider.propTypes = {
  commercialData: PropTypes.arrayOf(
    PropTypes.shape({
      slider_image: PropTypes.string.isRequired,
      estate_title: PropTypes.string.isRequired,
      slider_info: PropTypes.string.isRequired,
      id: PropTypes.number.isRequired
    })
  ).isRequired,
};

export default Slider;
