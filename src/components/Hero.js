import React from 'react';
import './Hero.css';
import heroImg from '../assets/hero.png';

const Hero = () => (
  <section className="hero-section">
    <img src={heroImg} alt="Hero" className="hero-bg" />
    <div className="hero-frame497">
      <h1>We Crush Your Competitors, Goals, And Sales Records – Without The B.S.</h1>
      <a className="hero-cta" href="#">GET FREE CONSULTATION</a>
    </div>
  </section>
);

export default Hero;
