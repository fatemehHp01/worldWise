import React from "react";
import { NavLink } from "react-router-dom";

const AppNav = () => {
  return (
    <nav className="sidebar__nav">
      <NavLink
        to="cities"
        className={({ isActive }) =>
          isActive ? "sidebar__link active" : "sidebar__link"
        }
      >
        Cities
      </NavLink>

      <NavLink
        to="countries"
        className={({ isActive }) =>
          isActive ? "sidebar__link active" : "sidebar__link"
        }
      >
        Countries
      </NavLink>
    </nav>
  );
};

export default AppNav;
