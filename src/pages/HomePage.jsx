import React from "react";
import PageNav from "../components/PageNav";
const HomePage = () => {
  return (
    <section className="home-page">
      <PageNav />

      <div className="home-page__content">
        <h1 className="home-page__title">
          You travel the world.
          <br />
          WorldWise keeps track of your adventures.
        </h1>

        <p className="home-page__description">
          A world map that remembers every city you've visited. Never forget
          your wonderful experiences and plan your next destination with ease.
        </p>

        <button className="home-page__button">Start Tracking</button>
      </div>
    </section>
  );
};

export default HomePage;
