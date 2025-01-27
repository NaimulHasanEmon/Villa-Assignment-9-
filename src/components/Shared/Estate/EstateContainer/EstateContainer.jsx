import { useEffect, useState } from "react";
import EstateCard from "../EstateCard/EstateCard";

const EstateContainer = () => {
  const [commercialData, setCommercialData] = useState([]);

  useEffect(() => {
    fetch("/commercial.json")
      .then((res) => res.json())
      .then((data) => setCommercialData(data));
  }, []);

  return (
    <div className="my-20">
      <div className="flex justify-center text-3xl lg:text-5xl mb-5 slide-info-bold">
        <p>Featured Commercial Properties</p>
      </div>
      <div className='p-1'>
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5'>
            {commercialData.map((commData, idx) => (
              <EstateCard key={idx} commData={commData}></EstateCard>
            ))}
          </div>
      </div>
    </div>
  );
};

export default EstateContainer;
