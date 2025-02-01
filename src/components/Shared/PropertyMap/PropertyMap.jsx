import PropTypes from "prop-types";

const PropertyMap = ({ coordinates }) => {
  const latitude = coordinates[0];
  const longitude = coordinates[1];

  const googleMapsSrc = `https://www.google.com/maps?q=${latitude},${longitude}&t=k&hl=es;&output=embed`;

  return (
    <div className="border-[3px] rounded-xl p-[2px] border-teal-300 shadow-2xl lg:h-96 xl:h-[500px]">
      <iframe
        src={googleMapsSrc}
        width="100%"
        height="100%"
        allowFullScreen
        loading="lazy"
      ></iframe>
    </div>
  );
};

PropertyMap.propTypes = {
  coordinates: PropTypes.array.isRequired,
};

export default PropertyMap;
