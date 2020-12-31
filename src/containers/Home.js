import React, { useState, useEffect, useMemo } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";

import Section from "../components/Section";
import Header from "../components/Header";
import WeatherImage from "../components/WeatherImage";

import CityHome from "../components/City";

function Home() {
  const history = useHistory();
  const [weatherData, setWeatherData] = useState(null);
  const [city, setCity] = useState("New York");

  const [cities, setCities] = useState([
    {
      name: "Jakarta",
      currentTemp: "0",
      color: "bg-yellow-200 hover:bg-yellow-300",
    },
    {
      name: "Bandung",
      currentTemp: "0",
      color: "bg-red-200 hover:bg-red-300",
    },
    {
      name: "Malang",
      currentTemp: "0",
      color: "bg-blue-200 hover:bg-blue-300",
    },
    {
      name: "Beijing",
      currentTemp: "0",
      color: "bg-purple-200 hover:bg-purple-300",
    },
    {
      name: "Kuala Lumpur",
      currentTemp: "0",
      color: "bg-green-200 hover:bg-green-300",
    },
    {
      name: "Bali",
      currentTemp: "0",
      color: "bg-pink-200 hover:bg-pink-300",
    },
  ]);

  useEffect(() => {
    // console.log(process.env.REACT_APP_WEATHER_KEY);
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${process.env.REACT_APP_WEATHER_KEY}`
      )
      .then(function (response) {
        // Successful request
        const weather = response.data;
        setWeatherData(weather);
      })
      .catch(function (error) {
        // The best practice of coding is to not use console.log
        console.log(error);
      });
  }, [city]);

  useEffect(() => {
    const searchParams = history.location.search;
    const urlParams = new URLSearchParams(searchParams);
    const city = urlParams.get("city");
    if (city) {
      setCity(city);
    }
  }, [history]);

  const { currentTemp } = useMemo(() => {
    let currentTemp = "";
    if (weatherData) {
      currentTemp = `${Math.round(weatherData.main.temp)}°C`;
    }
    return {
      currentTemp,
    };
  }, [weatherData]);

  return (
    // Container
    <div>
      <div className="mt-12">
        <div className="items-center font-mono text-3xl text-center font-bold">
          <a href="#">Weather App</a>
        </div>
      </div>

      <div className="text-center">
        <div className="grid grid-cols-3 gap-4 mx-32 p-5">
          {cities.map((item, index) => (
            <CityHome
              cityName={item.name}
              temp={item.currentTemp}
              color={item.color}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;
