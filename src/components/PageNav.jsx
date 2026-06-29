import React from "react";
import { NavLink } from "react-router-dom";

const PageNav = () => {
  return (
    <header className="page-nav">
      <div className="page-nav__logo">
        <span>WorldWise</span>
      </div>

      <nav className="page-nav__links">
        <NavLink to="/product">Product</NavLink>
        <NavLink to="/pricing">Pricing</NavLink>
        <NavLink to="/login" className="login-btn">
          Login
        </NavLink>
      </nav>
    </header>
  );
};

export default PageNav;
