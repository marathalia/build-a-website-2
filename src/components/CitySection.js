import React from "react";

function CitySection({ cityName, temp, color }) {
  return (
    <div className={+color}>
      <div className="text-2xl ">{cityName}</div>
      <div className="text-6xl ">{temp}</div>
    </div>
  );
}

export default CitySection;