import React from "react";
import GithubIcon from "../../public/github-icon.svg";
import LinkedinIcon from "../../public/linkedin-icon.svg";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="footer border z-10 border-[#A37D04] border-l-transparent border-r-transparent text-white">
      <div className="container p-12 flex justify-between items-center">
        <span className="text-white">Portafolio</span>
        <p className="text-white text-center">Derechos reservados</p>
        
        {/* <div className="socials flex flex-row">
        
          <a 
            href="https://www.linkedin.com/in/benjamín-ortega-martínez" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            <div className="hover:bg-[#292929] rounded-2xl">
              <Image src={LinkedinIcon} alt="Linkedin Icon" height={40} />
            </div>
          </a> 

          <a 
            href="https://github.com/benjaminortegamtnez" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            <div className="hover:bg-[#292929] rounded-2xl ml-2">
              <Image src={GithubIcon} alt="Github Icon" height={40} />
            </div>
          </a>
        </div> */}
      </div>
    </footer>
  );
};

export default Footer;
