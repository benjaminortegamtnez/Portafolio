import React from "react";
import DisenoLogoCards from "./components/DisenoLogoCards";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const DesignPage = () => {
  return (
    <div className="container mt-24 mx-auto px-12 py-4" id="logos">
        <Navbar />
            <DisenoLogoCards />
        <Footer />
    </div>
  );
};