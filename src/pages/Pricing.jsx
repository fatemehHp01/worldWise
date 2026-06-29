import PageNav from "../components/PageNav";

export default function Pricing() {
  return (
    <section className="pricing-page">
      <PageNav />
      <div className="pricing-container">
        <div className="pricing-content">
          <span className="pricing-tag">✨ Premium Experience</span>

          <h1>Simple pricing for every traveler.</h1>

          <p>
            Keep every adventure organized in one place. Save cities, write
            notes, and revisit your favorite destinations whenever you want.
          </p>

          <ul className="pricing-list">
            <li>✔ Unlimited saved cities</li>
            <li>✔ Interactive world map</li>
            <li>✔ Personal travel journal</li>
            <li>✔ Fast & secure experience</li>
          </ul>

          <button className="pricing-btn">Start Tracking</button>
        </div>
        <div className="pricing-image">
          <img src="/pricing.jpg" alt="Travel around the world" />
        </div>
      </div>
    </section>
  );
}
