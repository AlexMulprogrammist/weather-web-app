import React, { useState } from "react";
import "../components/styles.css";
import WeatherDetails from "./weatherDetails";

function SearchMain() {
  const [searchTerm, setSearchTerm] = useState("berlin");
  console.log("searchTerm", searchTerm);
  return (
    <>
      <div className="wrap">
        <div className="search">
          <input
            className="input"
            type="search"
            placeholder="Search city.."
            id="search"
            value={searchTerm}
            onChange={(event) => setSearchTerm(event.target.value)}
          />
        </div>
        <button className="searchButton">Search</button>
      </div>
      <WeatherDetails />
    </>
  );
}

export default SearchMain;