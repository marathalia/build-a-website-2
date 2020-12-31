import React from "react";
import CitySection from "../components/CitySection";

function Section() {
  // TODO
  return (
    // Container
    <div className="bg-blue-100 h-screen w-screen m-0 pb-5">
      {/* <p className="inline-block text-xl font-semibold p-5 text-left mt-5 ml-5 bg-green-100 rounded-2xl shadow-lg">
        {" "}
        Weather App{" "}
      </p> */}
      <div className="p-16 pb-50">
        <div className="flex-1 flex-col justify-right align-middle bg-white p-8 min-1/3 mx-24 rounded-3xl text-center">
          <div className="p-0">
            {/* <div className="inline-flex mb-0 text-right justify-right align-right bottom-0 right-0">
              <City temp={"32°C"} color={"bg-blue-200 hover:bg-blue-300"} />
            </div> */}
            <div className="font-semibold px-20 text-left mt-24 justify-left text-left align-middle">
              <CitySection temp={"10°C"} />
            </div>
            <div className="text-2xl font-semibold px-20 pb-10 justify-right text-right align-right">
              <CitySection cityName={"Kuala Lumpur"} />
            </div>
          </div>
        </div>

        <div className="mx-24 mt-16 mb-10">
          <div className="grid grid-row-2 grid-flow-col gap-8">
            <div className="bg-pink-200 row-span-2 col-span-3 rounded-2xl p-20">
              {" "}
              Weather{" "}
            </div>
            <div className="bg-pink-200 col-span-1 rounded-2xl p-20">
              {" "}
              Humidity{" "}
            </div>
            <div className="bg-pink-200 col-span-1 rounded-2xl p-20">
              {" "}
              Temperature{" "}
            </div>
            <div className="bg-pink-200 col-span-1 rounded-2xl p-20">
              {" "}
              Wind{" "}
            </div>
            <div className="bg-pink-200 col-span-1 rounded-2xl p-20">
              {" "}
              Air Flow{" "}
            </div>
            <div className="bg-pink-200 col-span-1 rounded-2xl p-20">
              {" "}
              Lorem{" "}
            </div>
            <div className="bg-pink-200 col-span-1 rounded-2xl p-20">
              {" "}
              Ipsum{" "}
            </div>
            <div className="bg-pink-200 col-span-1 rounded-2xl p-20">
              {" "}
              Anything{" "}
            </div>
            <div className="bg-pink-200 col-span-1 rounded-2xl p-20">
              {" "}
              Whateva{" "}
            </div>
          </div>
        </div>

        <div className="flex flex-row justify-left align-left text-center p-20">
          <div className="flex-1 flex-col justify-left align-top bg-white m-12 w-1/2 min-h-80 p-12 shadow-lg rounded-2xl text-center">
            <div>
              <p className="text-2xl font-semibold pt-18 px-20 pb-0 mt-5 ">
                {" "}
                Kuala Lumpur{" "}
              </p>
              <p className="mt-2 mb-4 text-gray-600">
                Divide details about your product or agency work into parts. A
                paragraph describing a feature will be enough.
              </p>
            </div>
          </div>
        </div>

        <p className="p-20 m-20">
          Divide details about your product or agency work into parts. A
          paragraph describing a feature will be enough.Divide details about
          your product or agency work into parts. A paragraph describing a
          feature will be enough.Divide details about your product or agency
          work into parts. A paragraph describing a feature will be
          enough.Divide details about your product or agency work into parts. A
          paragraph describing a feature will be enough.Divide details about
          your product or agency work into parts. A paragraph describing a
          feature will be enough.Divide details about your product or agency
          work into parts. A paragraph describing a feature will be
          enough.Divide details about your product or agency work into parts. A
          paragraph describing a feature will be enough.
        </p>
      </div>
    </div>
  );
}

export default Section;
