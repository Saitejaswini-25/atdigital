import React, { useState } from "react";
import "./FAQ.css";

const FAQS = [
  {
    q: "What is Webflow and why is it the best website builder?",
    a: "Vitae congue eu consequat ac felis placerat vestibulum lectus mauris ultrices. Cursus sit amet dictum sit amet justo donec enim diam porttitor lacus luctus accumsan tortor posuere."
  },
  {
    q: "What is Webflow and why is it the best website builder?",
    a: "Vitae congue eu consequat ac felis placerat vestibulum lectus mauris ultrices. Cursus sit amet dictum sit amet justo donec enim diam porttitor lacus luctus accumsan tortor posuere."
  },
  {
    q: "What is Webflow and why is it the best website builder?",
    a: "Vitae congue eu consequat ac felis placerat vestibulum lectus mauris ultrices. Cursus sit amet dictum sit amet justo donec enim diam porttitor lacus luctus accumsan tortor posuere."
  },
];

const FAQ = () => {
  const [open, setOpen] = useState(null);

  return (
    <section className="faq-section">
      <h2 className="faq-heading">Frequently asked questions</h2>
      <div className="faq-list">
        {FAQS.map((faq, idx) => (
          <div className={`faq-item${open === idx ? " faq-item--open" : ""}`} key={idx}>
            <button
              className="faq-row"
              onClick={() => setOpen(open === idx ? null : idx)}
              aria-expanded={open === idx}
              aria-controls={`faq-desc-${idx}`}
            >
              <span className="faq-q">{faq.q}</span>
              <span className="faq-toggle">{open === idx ? "–" : "+"}</span>
            </button>
            <div
              className="faq-a"
              id={`faq-desc-${idx}`}
              style={{ display: open === idx ? 'block' : 'none' }}
            >
              {faq.a}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQ;
