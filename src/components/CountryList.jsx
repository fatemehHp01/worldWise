import React, { useContext } from "react";
import { AppContext } from "../App";
import CountryItem from "./CountryItem";
const CountryList = () => {
  const { cities } = useContext(AppContext);
  const countries = cities.reduce((acc, city) => {
    const exists = acc.some((item) => item.country === city.country);

    if (!exists) {
      acc.push({
        country: city.country,
        emoji: city.emoji,
      });
    }

    return acc;
  }, []);
  return (
    <ul className="country-list">
      {countries.map((country) => (
        <CountryItem country={country} key={country.country} />
      ))}
    </ul>
  );
};

export default CountryList;
