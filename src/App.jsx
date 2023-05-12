import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import WeatherCard from "./components/WeatherCard";

const App = () => {
  const [searchInput, setSearchInput] = useState("");
  const [weatherData, setWeatherData] = useState(null);

  const getWeatherData = async (city) => {
    await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${
        import.meta.env.VITE_API_KEY
      }&units=metric`
    )
      .then((data) => data.json())
      .then((data) => {
        console.log(data), setWeatherData(data);
      });
  };

  const WEEKDAYS = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const newDate = new Date();
  let date = newDate.getDate(),
    month = WEEKDAYS[newDate.getMonth()],
    year = newDate.getFullYear();

  return (
    <>
      <Header
        searchInput={searchInput}
        setSearchInput={setSearchInput}
        getWeatherData={getWeatherData}
      />

      {weatherData ? (
        <WeatherCard
          weatherData={weatherData}
          date={date}
          month={month}
          year={year}
        />
      ) : (
        <h1 className="font-bold md:text-xl text-base opacity-75 absolute top-1/2 translate-y-[-50%] left-1/2 translate-x-[-50%]">
          The weather information will be displayed here☁️
        </h1>
      )}
    </>
  );
};

export default App;
