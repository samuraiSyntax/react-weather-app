import React from "react";

const WeatherCard = ({ weatherData, date, month, year }) => {
  return (
    <div className="w-full flex items-center justify-center px-6 h-[calc(100vh-12rem)]">
      <div className="shadow-md shadow-slate-400 w-full p-8">
        <div className="flex items-center justify-between mb-7">
          <h3 className="text-base md:text-xl font-semibold">
            🧭 {weatherData?.name}, {weatherData?.sys.country}
          </h3>
          <span className="text-sm opacity-70 font-semibold">
            {date} {month} {year}
          </span>
        </div>

        {/* weather info section */}
        <div className="w-full flex flex-col-reverse items-center justify-between gap-6 md:flex-row">
          <div>
            <h1 className="text-5xl md:text-7xl  font-bold text-center mb-3 md:text-left">
              {weatherData?.main.temp.toFixed(1)}°C
            </h1>
            <div className="flex flex-col">
              <span>Humidity: {weatherData?.main.humidity}%</span>
              <span>{weatherData?.weather.description}</span>
              <span>Wind speed: {weatherData?.wind.speed}m/s</span>
            </div>
          </div>
          <div className="md:w-[280px] w-[120px] bg-yellow-300">
            <img
              src={`https://openweathermap.org/img/w/${weatherData?.weather[0].icon}.png`}
              alt="weather icon"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeatherCard;
