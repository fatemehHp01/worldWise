import React from "react";
import { NavLink } from "react-router-dom";

const PageNav = () => {
  return (
    <header className="page-nav">
      <div className="page-nav__logo">
        <span>WorldWise</span>
      </div>
      <nav className="page-nav__links">
        <NavLink
          className={({ isActive }) =>
            isActive ? "nav-link active-link" : "nav-link"
          }
          to="/product"
        >
          Product
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive ? "nav-link active-link" : "nav-link"
          }
          to="/pricing"
        >
          Pricing
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive ? "nav-link active-link" : "nav-link"
          }
          to="/login"
        >
          Login
        </NavLink>
      </nav>
    </header>
  );
};

export default PageNav;
