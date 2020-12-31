import React from "react";

// props --> cityName, temp, color
function CityHome({ cityName, temp, color }) {
  return (
    <div
      className={
        "flex-1 p-20 mx-8 mt-20 shadow-lg h-80 rounded-2xl align-center text-center  " +
        color
      }
    >
      <div className="text-2xl ">{cityName}</div>
      <div className="text-5xl ">{temp}</div>
    </div>
  );
}

export default CityHome;
