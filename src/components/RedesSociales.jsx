import React from 'react';
import Image from 'next/image';
import Link from "next/link";

const RedesSociales = () => {
  
  let data = [
    {
      id: 1,
      imgSrc1: "/images/Redes/1.png",
      description1: "Formato digital - Sitio web oficial CUDI.",
      herramienta1: "/images/IconosHerramientas/ilustrador.png",
      imgSrc2: "/images/Redes/2.png",
      description2: "Formato digital - Sitio web oficial CUDI.",
      herramienta2: "/images/IconosHerramientas/ilustrador.png",
      imgSrc3: "/images/Redes/3.png",
      description3: "Formato digital - Sitio web oficial CUDI.",
      herramienta3: "/images/IconosHerramientas/ilustrador.png",
    },
    {
      id: 2,
      imgSrc1: "/images/Redes/4.png",
      description1: "Formato digital - Instagram, Facebook, Twitter.",
      herramienta1: "/images/IconosHerramientas/ilustrador.png",
      imgSrc2: "/images/Redes/5.png",
      description2: "Formato digital - Instagram, Facebook, Twitter.",
      herramienta2: "/images/IconosHerramientas/ilustrador.png",
      imgSrc3: "/images/Redes/6.png",
      description3: "Formato digital - Instagram, Facebook, Twitter.",
      herramienta3: "/images/IconosHerramientas/ilustrador.png",
    },
    {
      id: 3,
      imgSrc1: "/images/Redes/7.png",
      description1: "Banner - Sitio web oficial CUDI.",
      herramienta1: "/images/IconosHerramientas/ilustrador.png",
      imgSrc2: "/images/Redes/8.png",
      description2: "Banner - Sitio web oficial CUDI.",
      herramienta2: "/images/IconosHerramientas/ilustrador.png",
      imgSrc3: "/images/Redes/9.png",
      description3: "Banner - Sitio web oficial CUDI.",
      herramienta3: "/images/IconosHerramientas/ilustrador.png",
    },
    {
      id: 4,
      imgSrc1: "/images/Redes/10.png",
      description1: "Formato digital - Portada de vídeo para YouTube.",
      herramienta1: "/images/IconosHerramientas/ilustrador.png",
      imgSrc2: "/images/Redes/11.png",
      description2: "Formato digital - Portada de vídeo para YouTube.",
      herramienta2: "/images/IconosHerramientas/ilustrador.png",
      imgSrc3: "/images/Redes/12.png",
      description3: "Formato digital - Portada de vídeo para YouTube.",
      herramienta3: "/images/IconosHerramientas/ilustrador.png",
    },
  ];


  const RedSocialItem = ({ imgSrc, description, herramienta }) => (
    <div className="red-social-item">
      <Image
        src={imgSrc}
        alt="Imagen de red social"
        width={200}
        height={200}
        layout="responsive"
      />
      <div className="info-container2 mb-8 grid grid-cols-7">
        <div className="col-span-6">
          <p className="text-sm text-gray-300">{description}</p>
        </div>
        {herramienta && (
          <Image
            src={herramienta}
            alt="Icono de herramienta"
            width={30}
            height={30}
          />
        )}
      </div>
    </div>
  );

  return (
    <section id="redes">
      <div className="relative px-6 py-20 md:py-20">
        <h2 className="text-4xl font-semibold mt-12 mb-8 md:mb-3 text-[#FECA01]">
          Diseñador Gráfico en CUDI
        </h2>
        <p className="text-base sm:text-sm md:text-lg lg:text-lg text-white md:mb-8">
          Durante mi servicio social, desempeñé un papel clave en la creación de materiales de apoyo e imágenes de difusión para diversas campañas de divulgación científica. Colaboré en la realización de más de 20 eventos, como videoconferencias, conversatorios, jornadas de ciberseguridad, talleres y seminarios, generando materiales adaptados a distintos formatos para medios digitales, redes sociales y el sitio web oficial de CUDI. Solo presento tres ejemplos en esta sección:
        </p>
        {data.map(({ id, imgSrc1, description1, herramienta1, imgSrc2, description2, herramienta2, imgSrc3, description3, herramienta3 }) => (
          <div key={id} className="md:grid md:grid-cols-4 grid-cols-1 gap-8 mb-8 mt-8">
            <div></div>
            <RedSocialItem imgSrc={imgSrc1} description={description1} herramienta={herramienta1} />
            <RedSocialItem imgSrc={imgSrc2} description={description2} herramienta={herramienta2} />
            <RedSocialItem imgSrc={imgSrc3} description={description3} herramienta={herramienta3} />
          </div>
        ))}

        <div className="video-container">
          <h2 className="text-4xl font-semibold mt-12 mb-8 md:mb-3 text-[#FECA01]">
            Material Gráfico
          </h2>
          <p className="text-base lg:text-lg text-white md:mb-8">
          Contribuí en la creación de imágenes y materiales gráficos para el video destacado de Servicios CUDI 2022.
          </p>
          <div className="md:grid md:grid-cols-4">
            <div></div>
            <div className="iframe-container md:col-span-2 mt-2">
              <iframe
                className="w-full" 
                width="560" 
                height="315" 
                src="https://www.youtube.com/embed/1W0IUqz4YXI?si=Ih55PcywjkLaR46O" title="YouTube video player" 
                frameborder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                allowfullscreen>
              </iframe>
            </div>
          </div>
        </div>

        <div className="credits-container mt-8">
  <h3 className="text-4xl font-semibold mt-12 mb-8 md:mb-3 text-[#FECA01]">
    Créditos
  </h3>
  <p className="text-base lg:text-lg text-white">
    Al formar parte de la distinguida comunidad de CUDI durante mi servicio social, me enorgullece compartir que mi contribución se refleja en la sección de <a href="https://cudi.edu.mx/creditos" target="_blank" rel="noopener noreferrer" className="text-[#FECA01] underline">créditos del sitio web oficial de CUDI</a>. Aprecio profundamente la oportunidad de participar en proyectos significativos y colaborar a través de mi labor como Diseñador Gráfico.
  </p>
</div>

        <div className="flex items-center justify-center mt-28 ">
          <Link href="/#projects">
            <div className="rounded-full border-2 px-6 py-3 text-xl cursor-pointer text-white hover:text-[#FECA01] hover:border-[#FECA01]">
              Diseño
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default RedesSociales;