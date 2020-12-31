import React, { useState, useEffect, useMemo } from "react";
// import axios from "axios";
// import { useHistory } from "react-router-dom";

import Section from "../components/Section";
import Header from "../components/Header";
import WeatherImage from "../components/WeatherImage";

import CityHome from "../components/City";
const weatherKey = `TODO`; // Your API Key here

function Home() {
  // TODO
  return (
    // Container
    <div className="text-center">
      <div className="flex flex-row flex-wrap mt-10 mx-32">
        <CityHome
          cityName={"Atlanta"}
          temp={"10°C"}
          color={"bg-red-200 hover:bg-red-300"}
        />
        <CityHome
          cityName={"Jakarta"}
          temp={"20°C"}
          color={"bg-green-200 hover:bg-green-300"}
        />
        <CityHome
          cityName={"Bali"}
          temp={"30°C"}
          color={"bg-yellow-200 hover:bg-yellow-300"}
        />
      </div>

      <div className="flex flex-row flex-wrap mt-10 mx-32">
        <CityHome
          cityName={"Kuala Lumpur"}
          temp={"32°C"}
          color={"bg-blue-200 hover:bg-blue-300"}
        />
        <CityHome
          cityName={"Beijing"}
          temp={"-12°C"}
          color={"bg-pink-200 hover:bg-pink-300"}
        />
        <CityHome
          cityName={"Mumbai"}
          temp={"31°C"}
          color={"bg-purple-200 hover:bg-purple-300"}
        />
      </div>
    </div>
  );
}

export default Home;
