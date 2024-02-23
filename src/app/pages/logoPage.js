import React from "react";
import Navbar from "@/components/Navbar";
import DisenoLogoCards from "../../components/DisenoLogoCards";
import Footer from "@/components/Footer";

const logoPage = () => {
  return (
    <main className="flex min-h-screen flex-col bg-[#121212]" id="logoPage">
      <Navbar />
      <div className="container mt-24 mx-auto px-12 py-4">
        <Navbar />
            <DisenoLogoCards />
        <Footer />
        </div>
    </main>
  );
};

export default logoPage;