import React from "react";
import { useHistory } from "react-router-dom";

// props -> cityName ,temp, color
function City({ cityName, temp, color }) {
  const history = useHistory();

  function handleClick() {
    history.push("/city?name=" + cityName);
  }

  return (
    <button
      className={"flex-1 p-20 mx-8 mt-20 shadow-lg h-80 rounded-2xl align-center font-mono text-center " + color}
      onClick={handleClick}
    >
      <div className="text-3xl">{cityName}</div>
      <div className="text-5xl">{temp}</div>
    </button>
  );
}

export default City;