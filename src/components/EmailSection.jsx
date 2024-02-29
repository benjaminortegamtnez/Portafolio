"use client";
import React, { useState } from "react";
import GithubIcon from "../../public/github-icon.svg";
import LinkedinIcon from "../../public/linkedin-icon.svg";
// import Link from "next/link";
import Image from "next/image";

const EmailSection = () => {
  const [emailSubmitted, setEmailSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      email: e.target.email.value,
      subject: e.target.subject.value,
      message: e.target.message.value,
    };
    const JSONdata = JSON.stringify(data);
    const endpoint = "/api/send";

    // Form the request for sending data to the server.
    const options = {
      // The method is POST because we are sending data.
      method: "POST",
      // Tell the server we're sending JSON.
      headers: {
        "Content-Type": "application/json",
      },
      // Body of the request is the JSON data we created above.
      body: JSONdata,
    };

    const response = await fetch(endpoint, options);
    const resData = await response.json();

    if (response.status === 200) {
      console.log("Message sent.");
      setEmailSubmitted(true);
    }
  };


  return (
    <section
      id="contact"
      className="grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4 relative"
    >
      <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#A37D04] to-transparent rounded-full h-80 w-80 z-0 blur-lg absolute top-3/4 -left-4 transform -translate-x-1/2 -translate-1/2"></div>
      <div className="z-10">
        <h5 className="text-xl font-bold text-[#FECA01] my-2">
          Contacto
        </h5>
        <p className="text-[#ADB7BE] mb-4 max-w-md">
          {" "}
          Actualmente estoy buscando nuevas oportunidades, mi bandeja de entrada está siempre abierta. Si tienes alguna pregunta o simplemente quieres saludar, ¡haré todo lo posible para responderte!
        </p>
        <div className="socials flex flex-row gap-2">

        <a 
              href="https://www.linkedin.com/in/benjamín-ortega-martínez" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <div className="mt-4 mr-1 hover:bg-[#292929] rounded-2xl">
                <Image src={LinkedinIcon} alt="Linkedin Icon" />
              </div>
            </a> 

            <a 
              href="https://github.com/benjaminortegamtnez" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <div className="mt-4 mr-1 hover:bg-[#292929] rounded-2xl">
                <Image src={GithubIcon} alt="Github Icon" />
              </div>
            </a>       
        </div>
      </div>
      <div>
        {emailSubmitted ? (
          <p className="text-green-500 text-sm mt-2">
            ¡Correo enviado exitosamente!
          </p>
        ) : (
          <form className="flex flex-col" onSubmit={handleSubmit}>
            <div className="mb-6">
              <label
                htmlFor="email"
                className="text-white block mb-2 text-sm font-medium"
              >
                Correo
              </label>
              <input
                name="email"
                type="email"
                id="email"
                required
                className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                placeholder="correo@gmail.com"
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="subject"
                className="text-white block text-sm mb-2 font-medium"
              >
                Asunto
              </label>
              <input
                name="subject"
                type="text"
                id="subject"
                required
                className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                placeholder="Breve descripción"
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="message"
                className="text-white block text-sm mb-2 font-medium"
              >
                Mensaje
              </label>
              <textarea
                name="message"
                id="message"
                className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                placeholder="Me comunico para hablar acerca de..."
              />
            </div>
            <button
              type="submit"
              className="bg-[#1b1d22] border border-opacity-30 border-[#FECA01] hover:bg-[#0f0f0f] text-[#FECA01] font-medium py-2.5 px-5 rounded-lg w-full"
            >
              Enviar Mensaje
            </button>
          </form>
        )}
      </div>
    </section>
  );
};

export default EmailSection;
