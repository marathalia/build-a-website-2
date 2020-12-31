import React, { useState, useEffect, useMemo } from "react";
// import axios from "axios";
// import { useHistory } from "react-router-dom";

import Header from "../components/Header";
import WeatherImage from "../components/WeatherImage";

import City from "../components/City";
const weatherKey = `TODO`; // Your API Key here

import React from "react";

// props --> cityName, temp, color
function City({ cityName, temp, color }) {
  return (
    <div
      className={
        "flex-1 p-8 mx-8 mt-10 h-80 rounded-2xl justify-right text-right align-right " +
        color
      }
    >
      <div className="text-2xl ">{cityName}</div>
      <div className="text-3xl ">{temp}</div>
    </div>
  );
}

export default City;

function Home() {
  // TODO
  return (
    // Container
    <div className="text-center bg-gray-800">
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

      <div className="flex flex-row justify-center align-center text-center p-20">
        <div className="flex-1 flex-col justify-center align-center bg-white m-12 w-1/2 min-h-80 p-12 shadow-lg rounded-2xl text-center">
          <div>
            <p className="text-2xl font-semibold pt-18 px-20 pb-0 mt-5 ">
              {" "}
              Kuala Lumpur{" "}
            </p>
            {/* <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-red-400"> */}
            <div className="inline-flex flex-row flex-wrap mb-10 ">
              <City temp={"32°C"} color={"bg-blue-200 hover:bg-blue-300"} />
            </div>
            <p className="mt-2 mb-4 text-gray-600">
              Divide details about your product or agency work into parts. A
              paragraph describing a feature will be enough.
            </p>
          </div>
        </div>

        <div className="flex-1 flex-col justify-center align-center bg-white m-12 w-1/2 min-h-80 p-12 shadow-lg rounded-2xl text-center">
          <div>
            <p className="text-2xl font-semibold pt-18 px-20 pb-0 mt-5 ">
              {" "}
              Kuala Lumpur{" "}
            </p>
            {/* <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-red-400"> */}
            <div className="inline-flex flex-row flex-wrap mb-10 ">
              <City temp={"32°C"} color={"bg-blue-200 hover:bg-blue-300"} />
            </div>
            <p className="mt-2 mb-4 text-gray-600">
              Divide details about your product or agency work into parts. A
              paragraph describing a feature will be enough.
            </p>
          </div>
        </div>
      </div>

      <p>
        Divide details about your product or agency work into parts. A paragraph
        describing a feature will be enough.Divide details about your product or
        agency work into parts. A paragraph describing a feature will be
        enough.Divide details about your product or agency work into parts. A
        paragraph describing a feature will be enough.Divide details about your
        product or agency work into parts. A paragraph describing a feature will
        be enough.Divide details about your product or agency work into parts. A
        paragraph describing a feature will be enough.Divide details about your
        product or agency work into parts. A paragraph describing a feature will
        be enough.Divide details about your product or agency work into parts. A
        paragraph describing a feature will be enough.
      </p>

        <div class="px-4 sm:px-6 lg:px-4 xl:px-6 pt-4 pb-4 sm:pb-6 lg:pb-4 xl:pb-6 space-y-4">
            <ul class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 gap-4">
                <li x-for="item in items">
                    <a href="#" class="hover:bg-light-blue-500 hover:border-transparent hover:shadow-lg group block rounded-lg p-4 border border-gray-200">
                        <dl class="grid sm:block lg:grid xl:block grid-cols-2 grid-rows-2 items-center">
                            <div>
                                <dt class="sr-only">Title</dt>
                                <dd class="group-hover:text-white leading-6 font-medium text-black">
                                {item.title}
                                </dd>
                            </div>
                            
                            <div>
                                <dt class="sr-only">Category</dt>
                                <dd class="group-hover:text-light-blue-200 text-sm font-medium sm:mb-4 lg:mb-0 xl:mb-4">
                                {item.category}
                                </dd>
                            </div>

                            <div class="col-start-2 row-start-1 row-end-3">
                                <dt class="sr-only">Users</dt>
                                <dd class="flex justify-end sm:justify-start lg:justify-end xl:justify-start -space-x-2">
                                <img x-for="user in item.users" src="user.avatar" alt="user.name" width="48" height="48" class="w-7 h-7 rounded-full bg-gray-100 border-2 border-white" />
                                </dd>
                            </div>
                        </dl>
                    </a>
                </li>  
            </ul>
        </div>

    </div>

  );
}

export default Home;
