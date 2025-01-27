import { useEffect, useState } from "react";
import EstateCard from "../EstateCard/EstateCard";
import { Link } from "react-router-dom";

const EstateContainer = () => {
  const [commercialData, setCommercialData] = useState([]);

  useEffect(() => {
    fetch("/commercial.json")
      .then((res) => res.json())
      .then((data) => setCommercialData(data));
  }, []);

  return (
    <div>
      <p>Estate Container</p>
      <div className='card border shadow-xl mx-4 p-4'>
        <div className='bg-base-200 flex justify-center items-center min-h-48 rounded-xl mb-3'>
          <img className='h-36' src={""} alt={""} />
        </div>
        <div className=''>
          <div className='border-b-2 border-dashed pb-2'>
            <div className='grid gap-2 grid-cols-2'>
              {commercialData.map((commData, idx) => 
                <EstateCard key={idx} commData={commData}></EstateCard>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EstateContainer;
