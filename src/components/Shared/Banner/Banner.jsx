import AwesomeSlider from "react-awesome-slider";
import "react-awesome-slider/dist/styles.css";
import withAutoplay from "react-awesome-slider/dist/autoplay";
import PropTypes from "prop-types";

const AutoplaySlider = withAutoplay(AwesomeSlider);

const Banner = ({ bannerInfo }) => {
  return (
    <div>
      <AutoplaySlider
        className='h-[585px]'
        play={true}
        autoPlaySpeed={3000}
        infinite={true}
      >
        {bannerInfo.map((slide, index) => (
          <div key={index}>
            <img src={slide.image} className="h-[580px] w-full object-cover" alt={slide.title} />
            <h3>{slide.title}</h3>
            <p>{slide.description}</p>
          </div>
        ))}
      </AutoplaySlider>
    </div>
  );
};

Banner.propTypes = {
  bannerInfo: PropTypes.array.isRequired,
};

export default Banner;
