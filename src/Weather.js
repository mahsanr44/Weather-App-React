import React, { useEffect, useState } from "react";
import Temp from "./Temp";

const Weather = () => {
  const [searchValue, setSearchValue] = useState("islamabad");
  const [TempInfo, setTemInfo] = useState("");

  const getWeatherInfo = async () => {
    try {
      let url = `https://api.openweathermap.org/data/2.5/weather?q=${searchValue}&units=metric&appid=7a0e4ee7fc5c03964a79e782f25f547d`;
      const res = await fetch(url);
      const data = await res.json();

      const { temp, humidity, pressure } = data.main;
      const { main: weatherMood } = data.weather[0];
      const { name } = data;
      const { speed } = data.wind;
      const { country, sunset } = data.sys;

      const newWeatherInfo = {
        temp,
        humidity,
        pressure,
        weatherMood,
        name,
        speed,
        country,
        sunset,
      };

      setTemInfo(newWeatherInfo);
    } catch (error) {
      console.log(error);
    }
  };

  // Only run this function on page refrresh
  useEffect(() => {
    getWeatherInfo();
  }, []);

  return (
    <div>
      <div>
        <div
          className="flex mb-11  items-center max-w-xs mx-auto bg-white rounded-lg"
          x-data="{ search: '' }"
        >
          <div className="w-full">
            <input
              value={searchValue}
              onChange={(event) => setSearchValue(event.target.value)}
              type="search"
              className="w-full px-4 text-gray-800 rounded-full focus:outline-none"
              placeholder="Enter City Name"
              x-model="search"
            />
          </div>
          <div>
            <button
              type="submit"
              onClick={getWeatherInfo}
              className="flex items-center bg-[#28c0c3] justify-center w-16 h-8 text-white rounded-r-lg"
            >
              Search
            </button>
          </div>
        </div>
      </div>

      {/* Weather Card  */}
      <Temp tempInfo={TempInfo} />
    </div>
  );
};

export default Weather;
