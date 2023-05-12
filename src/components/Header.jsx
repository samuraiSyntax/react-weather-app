import React from "react";

const Header = ({ searchInput, setSearchInput, getWeatherData }) => {
  const onFormSubmit = (e) => {
    e.preventDefault();
    getWeatherData(searchInput);
    setSearchInput(" ");
  };

  return (
    <div className="w-full shadow-sm py-4 px-5 flex items-center justify-between mb-9 relative">
      <h2 className="text-xl font-bold capitalize ">ClearSkies</h2>
      <form onSubmit={onFormSubmit} className=" ">
        <div className="flex flex-col md:flex-row md:items-center">
          <input
            type="text"
            placeholder="Search your city"
            autoFocus
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
            className=" py-2 px-3 capitalize text-xs md:text-base bg-slate-100"
          />
          <button type="submit" className="py-2 px-3 text-xs md:text-base">
            search
          </button>
        </div>
      </form>
    </div>
  );
};

export default Header;
