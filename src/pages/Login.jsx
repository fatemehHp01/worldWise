import React from "react";

import PageNav from "../components/PageNav";

export default function Login() {
  return (
    <section className="login-page">
      <PageNav />

      <div className="login-card">
        <span className="login-badge">Welcome Back 👋</span>

        <h1>Sign in to WorldWise</h1>

        <p>
          Continue your journey and explore the places you've visited around the
          world.
        </p>

        <form className="login-form">
          <div className="form-group">
            <label>Email Address</label>

            <input type="email" placeholder="Enter your email" />
          </div>

          <div className="form-group">
            <label>Password</label>

            <input type="password" placeholder="Enter your password" />
          </div>

          <button type="submit" className="login-btn">
            Login
          </button>
        </form>
      </div>
    </section>
  );
}
