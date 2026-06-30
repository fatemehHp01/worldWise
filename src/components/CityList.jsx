import React, { useContext } from "react";
import CityItem from "./CityItem";
import { AppContext } from "../App";
const CityList = () => {
  const { cities } = useContext(AppContext);
  return (
    <div className="city-list">
      <h2 className="city-list__title">Cities List</h2>
      <ul className="city-list__items">
        {cities.map((city) => (
          <CityItem city={city} key={city.id} />
        ))}
      </ul>
    </div>
  );
};

export default CityList;
