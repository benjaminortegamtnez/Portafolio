import React from "react";
import GithubIcon from "../../public/github-icon.svg";
import LinkedinIcon from "../../public/linkedin-icon.svg";
import ContactIcon from "../../public/contact-icon.svg";
import MailIcon from "../../public/mail-icon.svg";
import Image from "next/image";

const EmailSection = () => {
  return (
    <section
      id="contact"
      className="grid md:grid-cols-2 my-12 md:my-12 py-8 gap-4 relative">
      <div className="z-10">
      <div className="col-span-3">
        <h2 className="text-4xl font-bold text-[#FECA01] my-2">
          Contacto
        </h2>
      </div>
        <p className="sm:text-base text-sm text-[#ADB7BE] mb-4 mt-5 max-w-md">
        ¡Hola! Soy un apasionado diseñador y desarrollador web en busca de emocionantes oportunidades profesionales. Mi bandeja de entrada siempre está abierta para discutir proyectos, ideas creativas o simplemente para saludar. Estoy aquí para responder cualquier pregunta que tengas. ¡Espero saber de ti pronto!
        </p>
      </div>

      <div>
        {/* Phone number */}
        <div className="gird items-center ">
          <a
              href="https://bit.ly/BenjaminDesign"
              target="_blank"
              rel="noopener noreferrer"
            >
            <div className="mr-1 rounded-2xl flex items-center">
              <Image src={ContactIcon} alt="Phone Icon" />
              <p className="sm:text-base text-sm text-[#ADB7BE]  hover:text-[#FECA01] cursor-pointer ml-2">
                +52 55 8093 7225
              </p>
            </div>
          </a>
        </div>

        {/* Correo */}
        <div className="gird items-center ">
          <a
              href="mailto:benjaminortega.mtnez@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
            <div className="mt-3 mr-1 rounded-2xl flex items-center">
              <Image src={MailIcon} alt="Mail Icon" />
              <p className="sm:text-base text-sm text-[#ADB7BE]  hover:text-[#FECA01] cursor-pointer ml-2">
              benjaminortega.mtnez@gmail.com
              </p>
            </div>
          </a>
        </div>

        {/* GitHub */}
        <div className="gird items-center">
          <a
              href="https://github.com/benjaminortegamtnez"
              target="_blank"
              rel="noopener noreferrer"
            >
            <div className="mt-3 mr-1 rounded-2xl flex items-center">
              <Image src={GithubIcon} alt="Github Icon" />
              <p className="sm:text-base text-sm text-[#ADB7BE] hover:text-[#FECA01] cursor-pointer ml-2">
                www.github.com/benjaminortegamtnez
              </p>
            </div>
          </a>
        </div>
     
        {/* LinkedIn */}
        <div className="gird items-center">
          <a
              href="https://www.linkedin.com/in/benjamín-ortega-martínez"
              target="_blank"
              rel="noopener noreferrer"
            >
            <div className="mt-3 mr-1 rounded-2xl flex items-center">
              <Image src={LinkedinIcon} alt="Linkedin Icon" />
              <p className="sm:text-base text-sm text-[#ADB7BE]  hover:text-[#FECA01] cursor-pointer ml-2">
                www.linkedin.com/in/benjamín-ortega-martínez
              </p>
            </div>
          </a>
        </div>

      </div>
    </section>
  );
};

export default EmailSection;




