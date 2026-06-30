import React from "react";

const CountryItem = ({ country }) => {
  return (
    <li className="country-card">
      <span>{country.emoji}</span>

      <h3>{country.country}</h3>
    </li>
  );
};

export default CountryItem;
