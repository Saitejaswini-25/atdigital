import React from "react";
import monitorImg from "../assets/feature-monitor.png";
import magnifierImg from "../assets/feature-magnifier.png";
import "./Features.css";

const FEATURES = [
  {
    img: monitorImg,
    alt: "Web & Mobile App Development",
    title: "Web & Mobile App Development",
    desc: "Your web and mobile Apps are pieces of the puzzle to grow your business. We use frameworks which tailor content and engagement methods to respond to different intents shown by your potential customers who interact with your business online."
  },
  {
    img: magnifierImg,
    alt: "Digital Strategy Consulting",
    title: "Digital Strategy Consulting",
    desc: "Your digital strategy should complement the overall marketing strategy of the company. In online marketing, each component will never work in isolation and every business needs a different mix. We provide a clear concept and strategic overview to find the most efficient model for your business."
  },
];

const Features = () => (
  <section className="features-section">
    {FEATURES.map((f, idx) => (
      <div
        className={`feature-row${idx === 1 ? " feature-row--reverse" : ""}`}
        key={idx}
      >
        <div className="feature-icon-wrapper">
          <img src={f.img} alt={f.alt} className="feature-icon" />
        </div>
        <div className="feature-info">
          <h3 className="feature-title">{f.title}</h3>
          <p className="feature-desc">{f.desc}</p>
          <button className="feature-btn">LEARN MORE</button>
        </div>
      </div>
    ))}
  </section>
);

export default Features;
