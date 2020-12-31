import React from "react";
import { useHistory } from "react-router-dom";

// props -> cityName ,temp, color
function CitySection({ cityName, temp, color }) {
  const history = useHistory();

  return (
    <div className={+color}>
      <div className="text-2xl">{cityName}</div>
      <div className="text-6xl">{temp}</div>
    </div>  
  );
}

export default CitySection;