import React, { useState, useEffect, useMemo } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";

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
      weatherType: "",
      color: "bg-yellow-200 hover:bg-yellow-300",
    },
    {
      name: "Moscow",
      currentTemp: "0",
      weatherType: "",
      color: "bg-red-200 hover:bg-red-300",
    },
    {
      name: "Konya",
      currentTemp: "0",
      weatherType: "",
      color: "bg-blue-200 hover:bg-blue-300",
    },
    {
      name: "Wuhan",
      currentTemp: "0",
      weatherType: "",
      color: "bg-purple-200 hover:bg-purple-300",
    },
    {
      name: "Nairobi",
      currentTemp: "0",
      weatherType: "",
      color: "bg-green-200 hover:bg-green-300",
    },
    {
      name: "Zermatt",
      currentTemp: "0",
      weatherType: "",
      color: "bg-pink-200 hover:bg-pink-300",
    },
  ]);

  useEffect(() => {
    updateAllWeatherData();
  }, []);

  // Fetch the weather data for 1 city
  async function fetchWeatherData(cityName) {
    const res = await axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=${process.env.REACT_APP_WEATHER_KEY}`
      )
      .then(function (response) {
        // Successful request
        const weather = response.data;
        return weather;
      })
      .catch(function (error) {
        // The best practice of coding is to not use console.log
        console.warn(error);
      });

    return res;
  }

  // update the list data
  async function updateAllWeatherData(params) {
    cities.forEach(function (citiesItems, index) {
      let weatherData = {};
      let newCities = [...cities];

      fetchWeatherData(citiesItems.name).then((res) => {
        weatherData = res;

        newCities[index].currentTemp = weatherData.main.temp;
        newCities[index].weatherType = weatherData.weather[0].main;
        setCities(newCities);
      });
    });
  }

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
              weatherType={item.weatherType}
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
