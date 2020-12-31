import React, { useState, useEffect, useMemo } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import WeatherImage from "../components/WeatherImage";
import CitySection from "../components/CitySection";
import "../App.css";

// TODO
// - implement API
// - add props to details screen
// - style the details screen

function Details() {
  const history = useHistory();
  const [weatherData, setWeatherData] = useState(null);
  const [city, setCity] = useState("");

  useEffect(() => {
    console.log(process.env.REACT_APP_WEATHER_KEY);
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
    const city = urlParams.get("name");
    if (city) {
      setCity(city);
    }
  }, [history]);

  const {
    cloudiness,
    currentTemp,
    highTemp,
    humidity,
    lowTemp,
    weatherType,
    windSpeed,
  } = useMemo(() => {
    let cloudiness = "";
    let currentTemp = "";
    let highTemp = "";
    let humidity = "";
    let lowTemp = "";
    let weatherType = "";
    let windSpeed = "";

    if (weatherData) {
      cloudiness = `${weatherData.clouds.all}%`;
      currentTemp = `${Math.round(weatherData.main.temp)}°C`;
      highTemp = `${Math.round(weatherData.main.temp_max)}°C`;
      humidity = `${weatherData.main.humidity}%`;
      lowTemp = `${Math.round(weatherData.main.temp_min)}°C`;
      weatherType = `${weatherData.weather[0].description}`;
      windSpeed = `${weatherData.wind.speed} mph`;
    }

    return {
      cloudiness,
      currentTemp,
      highTemp,
      humidity,
      lowTemp,
      weatherType,
      windSpeed,
    };
  }, [weatherData]);

  return (
    // Container
    <div className="flex flex-col items-center h-screen bg-white">
      <div className="mt-12">
        <div className="items-center font-mono text-3xl text-center font-bold">
          <a>Weather App</a>
        </div>
      </div>
      <div className="mx-32 mt-3.5 mb-10 px-24 pt-8">
        <div className="grid grid-row-3 grid-flow-col gap-10 auto-rows-fr font-mono">
          <div className="bg-pink-200 row-span-3 col-span-3 shadow-lg rounded-2xl p-20 pt-32">
            <WeatherImage
              weatherType={weatherType}
              className="text-5xl text-center justify-center"
            />
            <div className="text-5xl mb-10 font-mono">{weatherType}</div>
            <div className="text-4xl pt-16">
              Current Temperature:{" "}
              <a className="text-6xl font-mono">{currentTemp}</a>
            </div>
          </div>
          <div className="bg-blue-200 col-span-3 rounded-2xl shadow-lg py-16 px-10 text-6xl font-mono">
            <div className="align-middle items-center text-right">
              {" "}
              {city}.{" "}
            </div>
          </div>
          <div className="bg-purple-200 col-span-1 rounded-2xl shadow-lg p-10 items-center align-middle">
            <a className="text-xl">High Temperature:</a>
            <p className="text-5xl">{highTemp}</p>
          </div>
          <div className="bg-yellow-200 col-span-1 rounded-2xl shadow-lg p-10 items-center align-middle">
            <a className="text-xl">Cloudiness:</a>
            <p className="text-5xl">{cloudiness}</p>
          </div>
          <div className="bg-purple-200 col-span-1 rounded-2xl shadow-lg p-10">
            <a className="text-xl">Low Temperature:</a>
            <p className="text-5xl">{lowTemp}</p>
          </div>
          <div className="bg-yellow-200 col-span-1 rounded-2xl shadow-lg p-10">
            <a className="text-xl">Humidity:</a>
            <p className="text-5xl">{humidity}</p>
          </div>
          <div className="bg-green-200 row-span-2 rounded-2xl shadow-lg p-10">
            <a className="text-xl">Wind Speed:</a>
            <p className="text-5xl">{windSpeed}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Details;
