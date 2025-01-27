import { useState, useEffect } from "react";
import AwesomeSlider from "react-awesome-slider";
import "react-awesome-slider/dist/styles.css";
import withAutoplay from "react-awesome-slider/dist/autoplay";
import PropTypes from "prop-types";
import "./Slider.css";
import { Link } from "react-router-dom";
import { FaLocationArrow } from "react-icons/fa";

const AutoplaySlider = withAutoplay(AwesomeSlider);

const Slider = ({ sliderInfo }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % sliderInfo.length);
    }, 5000); // Match the interval with the slider interval

    return () => clearInterval(interval);
  }, [sliderInfo.length]);

  return (
    <div className='relative'>
      <AutoplaySlider
        className='h-[633px]'
        play={true}
        interval={5000} // Interval between slides
        infinite={true}
        bullets={false} // Add this line to remove the dots
        buttons={false} // Add this line to remove the arrows
        onTransitionEnd={(event) => setCurrentSlide(event.currentIndex)}
      >
        {sliderInfo.map((slide, idx) => (
          <div key={idx}>
            <img
              src={slide.image}
              className='h-[633] contrast-150 opacity-40 w-full object-cover'
              alt={slide.title}
            />
            <div
              className={`absolute bottom-20 left-20 text-5xl text-white z-50 pr-[500px] slide-info-bold ${
                currentSlide === idx ? "animate-slide-up" : ""
              }`}
            >
              <p>{slide.info}</p>
              <div className="relative mt-10">
                <Link to='' className='pl-4 text-xl button-exploreMore w-52 flex items-center gap-2 hover:transition-all hover:duration-300 hover:translate-x-1 hover:-translate-y-1 ease-in-out'>
                  <span className='py-1'>Explore More</span>
                  <div className="text-teal-600 mb-1">
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
  sliderInfo: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      info: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default Slider;
