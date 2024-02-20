import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const DisenoLogo = () => {
  return (
    <section
    id="diseno"
    >

    <div className="flex min-h-screen flex-col bg-[#121212]">
      <Navbar />
      <div id="diseno" className="container mt-24 mx-auto px-12 py-4 flex">
        <div className="w-1/2">
          {/* Aquí colocas la imagen de lado izquierdo */}
          <img src="/images/benjamin_c2.png" alt="Logo" className="w-full h-auto" />
        </div>
        <div className="w-1/2 ml-8">
          {/* Aquí va la breve descripción */}
          <h1 className="text-4xl font-bold text-white mb-4">Logotipos</h1>
          <p className="text-gray-400">
            Breve descripción de tu logotipo o cualquier otro contenido que desees agregar.
          </p>
        </div>
      </div>
    </div>
    <Footer />
    </section>
    
  );
};

export default DisenoLogo;

