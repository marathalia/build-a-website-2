import React from "react";
import { useHistory } from "react-router-dom";

// props -> cityName ,temp, color
function City({ cityName, weatherType, temp = 0, color }) {
  const history = useHistory();

  function handleClick() {
    history.push("/city?name=" + cityName);
  }

  return (
    <button
      className={
        "flex-1 p-20 mx-8 mt-12 shadow-lg h-80 rounded-2xl align-center font-mono text-center " +
        color
      }
      onClick={handleClick}
    >
      <div className="flex flex-col">
        <div className="text-3xl">{cityName}</div>
      </div>

      <div className="text-5xl">{Math.round(temp)}°C</div>
      <div className="text-xl font-light">{weatherType}</div>
    </button>
  );
}

export default City;