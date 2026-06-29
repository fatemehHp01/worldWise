import React from "react";
import PageNav from "../components/PageNav";

export default function Product() {
  return (
    <section className="product-page">
      <PageNav />

      <div className="product-container">
        <div className="product-image">
          <img src="/product.jpg" alt="Travel with WorldWise" />
        </div>

        <div className="product-content">
          <span className="product-tag">🌍 Travel Smarter</span>

          <h1>Every destination has a story.</h1>

          <p>
            WorldWise helps you remember every city you've visited by saving
            locations, notes and memories in one beautiful place.
          </p>

          <p>
            Build your own travel journal and explore the world without
            forgetting the moments that mattered most.
          </p>
        </div>
      </div>
    </section>
  );
}
