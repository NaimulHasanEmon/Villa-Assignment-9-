import EstateCard from "../EstateCard/EstateCard";
import PropTypes from 'prop-types';

const EstateContainer = ({commercialData }) => {
  return (
    <div className="mb-6 md:my-10 lg:my-15">
      <div className="flex justify-center text-center px-1 text-2xl md:text-3xl lg:text-4xl lg:mb-5 slide-info-bold">
        <p>Featured Commercial Properties</p>
      </div>
      <div className='p-1'>
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5'>
            {commercialData.map((commData) => (
              <EstateCard key={commData.id} commData={commData}></EstateCard>
            ))}
          </div>
      </div>
    </div>
  );
};

EstateContainer.propTypes = {
  commercialData: PropTypes.array.isRequired,
};

export default EstateContainer;
