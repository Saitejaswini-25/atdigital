import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";
import "./index.css";

function App() {
  return (
    <div id="root">
      <div className="main-content">
        <Navbar />
        <Hero />
        <Features />
        <FAQ />
      </div>
      <Footer />
    </div>
  );
}

export default App;
