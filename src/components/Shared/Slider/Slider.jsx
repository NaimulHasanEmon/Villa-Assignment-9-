import AwesomeSlider from "react-awesome-slider";
import "react-awesome-slider/dist/styles.css";
import withAutoplay from "react-awesome-slider/dist/autoplay";
import PropTypes from "prop-types";

const AutoplaySlider = withAutoplay(AwesomeSlider);

const Slider = ({ sliderInfo }) => {
  return (
    <div className='relative'>
      <AutoplaySlider
        className='h-[633px]'
        play={true}
        interval={5000} // Interval between slides
        infinite={true}
        bullets={false} // Add this line to remove the dots
        buttons={false} // Add this line to remove the arrows
      >
        {sliderInfo.map((slide, idx) => (
          <div key={idx}>
            <img
              src={slide.image}
              className='h-[633] opacity-50 w-full object-cover'
              alt={slide.title}
            />
            <div className='absolute bottom-36 left-20 text-4xl text-white z-50 slide-info pr-[500px]'>
              <p>{slide.info}</p>
            </div>
          </div>
        ))}
      </AutoplaySlider>
    </div>
  );
};

Slider.propTypes = {
  sliderInfo: PropTypes.array.isRequired,
};

export default Slider;
