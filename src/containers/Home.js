import React, { useState, useEffect, useMemo } from "react";
// import axios from "axios";
// import { useHistory } from "react-router-dom";

import Header from "../components/Header";
import WeatherImage from "../components/WeatherImage";

import City from "../components/City";
const weatherKey = `TODO`; // Your API Key here

function Home() {
  // TODO
  return (
    // Container
    <div className="text-center">
      <div className="inline-flex flex-row flex-wrap">
        <City
          cityName={"Atlanta"}
          temp={"10°C"}
          color={"bg-red-200 hover:bg-red-300"}
        />
        <City
          cityName={"Jakarta"}
          temp={"20°C"}
          color={"bg-green-200 hover:bg-green-300"}
        />
        <City
          cityName={"Bali"}
          temp={"30°C"}
          color={"bg-yellow-200 hover:bg-yellow-300"}
        />
      </div>

      <div className="inline-flex flex-row flex-wrap">
        <City
          cityName={"Kuala Lumpur"}
          temp={"32°C"}
          color={"bg-blue-200 hover:bg-blue-300"}
        />
        <City
          cityName={"Beijing"}
          temp={"-12°C"}
          color={"bg-pink-200 hover:bg-pink-300"}
        />
        <City
          cityName={"Mumbai"}
          temp={"31°C"}
          color={"bg-purple-200 hover:bg-purple-300"}
        />
      </div>
    </div>
  );
}

export default Home;
