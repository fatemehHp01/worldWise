import React from "react";

const CityItem = ({ city }) => {
  return (
    <li key={city.id} className="city-item">
      <span className="city-item__emoji">{city.emoji}</span>

      <div className="city-item__info">
        <h3>{city.cityName}</h3>
        <p>{city.country}</p>
      </div>

      <span className="city-item__date">{city.date}</span>
    </li>
  );
};

export default CityItem;
