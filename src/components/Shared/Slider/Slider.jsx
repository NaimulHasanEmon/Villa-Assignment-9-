import AwesomeSlider from "react-awesome-slider";
import "react-awesome-slider/dist/styles.css";
import withAutoplay from "react-awesome-slider/dist/autoplay";
import PropTypes from "prop-types";

const AutoplaySlider = withAutoplay(AwesomeSlider);

const Slider = ({ sliderInfo }) => {
  return (
    <div>
      <AutoplaySlider
        className='h-[633px]'
        play={true}
        autoPlaySpeed={3000}
        infinite={true}
        bullets={false} // Add this line to remove the dots
      >
        {sliderInfo.map((slide, index) => (
          <div key={index}>
            <img src={slide.image} className="h-[633] w-full object-cover" alt={slide.title} />
            <h3>{slide.title}</h3>
            <p>{slide.description}</p>
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