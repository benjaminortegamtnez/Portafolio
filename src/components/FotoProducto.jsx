"use client";
import React, { useState } from "react";
import Image from "next/image";
import { XMarkIcon } from "@heroicons/react/24/solid";
import Link from "next/link";

const FotoProducto = () => {

    let data = [
        {
          id: 1,
          imagSrc: "/images/producto/PA_1.jpg",
          title: "Pigmento Líquido 60ml",
          description: "Fotografía Profesional y Edición en Adobe Photoshop.",
          herramienta: [
            "/images/IconosHerramientas/foto.png",
            "/images/IconosHerramientas/photoshop.png",
          ],
        },
        {
          id: 2,
          imagSrc: "/images/producto/PA_3.jpg",
          title: "Pigmento Líquido 60ml",
          description: "Fotografía Profesional y Edición en Adobe Photoshop.",
          herramienta: [
            "/images/IconosHerramientas/foto.png",
            "/images/IconosHerramientas/photoshop.png",
          ],
        },
        {
          id: 3,
          imagSrc: "/images/producto/PA_5.jpg",
          title: "KIT Pigmentos 60ml",
          description: "Fotografía Profesional y Edición en Adobe Photoshop.",
          herramienta: [
            "/images/IconosHerramientas/foto.png",
            "/images/IconosHerramientas/photoshop.png",
          ],
        },
        {
            id: 4,
            imagSrc: "/images/producto/PC_4.jpg",
            title: "Pigmento en Crema",
            description: "Fotografía Profesional y Edición en Adobe Photoshop.",
            herramienta: [
              "/images/IconosHerramientas/foto.png",
              "/images/IconosHerramientas/photoshop.png",
            ],
          },
          {
            id: 5,
            imagSrc: "/images/producto/PC_5.jpg",
            title: "Pigmento en Crema",
            description: "Fotografía Profesional y Edición en Adobe Photoshop.",
            herramienta: [
              "/images/IconosHerramientas/foto.png",
              "/images/IconosHerramientas/photoshop.png",
            ],
          },
          {
            id: 6,
            imagSrc: "/images/producto/PC_6.jpg",
            title: "KIT de Pigmentos en Crema",
            description: "Fotografía Profesional y Edición en Adobe Photoshop.",
            herramienta: [
              "/images/IconosHerramientas/foto.png",
              "/images/IconosHerramientas/photoshop.png",
            ],
          },
          {
            id: 7,
            imagSrc: "/images/producto/MAY_7.jpg",
            title: "Crema 100ml",
            description: "Fotografía Profesional y Edición en Adobe Photoshop.",
            herramienta: [
              "/images/IconosHerramientas/foto.png",
              "/images/IconosHerramientas/photoshop.png",
            ],
          },
          {
            id: 8,
            imagSrc: "/images/producto/MAY_8.jpg",
            title: "Fluído 100ml",
            description: "Fotografía Profesional y Edición en Adobe Photoshop.",
            herramienta: [
              "/images/IconosHerramientas/foto.png",
              "/images/IconosHerramientas/photoshop.png",
            ],
          },
          {
            id: 9,
            imagSrc: "/images/producto/MAY_5.jpg",
            title: "Tecnología Capilar Kit 100ml",
            description: "Fotografía Profesional y Edición en Adobe Photoshop.",
            herramienta: [
              "/images/IconosHerramientas/foto.png",
              "/images/IconosHerramientas/photoshop.png",
            ],
          },
          {
            id: 10,
            imagSrc: "/images/producto/MAY_2.jpg",
            title: "Estuche Nanomist",
            description: "Fotografía Profesional y Edición en Adobe Photoshop.",
            herramienta: [
              "/images/IconosHerramientas/foto.png",
              "/images/IconosHerramientas/photoshop.png",
            ],
          },
          {
            id: 11,
            imagSrc: "/images/producto/MAY_3.jpg",
            title: "KIT Nanomist",
            description: "Fotografía Profesional y Edición en Adobe Photoshop.",
            herramienta: [
              "/images/IconosHerramientas/foto.png",
              "/images/IconosHerramientas/photoshop.png",
            ],
          },
          {
            id: 12,
            imagSrc: "/images/producto/MAY_4.jpg",
            title: "Nanomist",
            description: "Fotografía Profesional y Edición en Adobe Photoshop.",
            herramienta: [
              "/images/IconosHerramientas/foto.png",
              "/images/IconosHerramientas/photoshop.png",
            ],
          },
          {
            id: 13,
            imagSrc: "/images/producto/MAY_N1.jpg",
            title: "Taza",
            description: "Fotografía Profesional y Edición en Adobe Photoshop.",
            herramienta: [
              "/images/IconosHerramientas/foto.png",
              "/images/IconosHerramientas/photoshop.png",
            ],
          },
          {
            id: 14,
            imagSrc: "/images/producto/MAY_N5.jpg",
            title: "KIT de Viaje",
            description: "Fotografía Profesional y Edición en Adobe Photoshop.",
            herramienta: [
              "/images/IconosHerramientas/foto.png",
              "/images/IconosHerramientas/photoshop.png",
            ],
          },
          {
            id: 15,
            imagSrc: "/images/producto/MAY_N2.jpg",
            title: "Gorra",
            description: "Fotografía Profesional y Edición en Adobe Photoshop.",
            herramienta: [
              "/images/IconosHerramientas/foto.png",
              "/images/IconosHerramientas/photoshop.png",
            ],
          },
      ];
    
      const [model, setModel] = useState(false);
      const [tempImgSrc, setTempImgSrc] = useState("");
    
      const getImg = (imagSrc) => {
        setTempImgSrc(imagSrc);
        setModel(true);
      };
    
      const closeImage = () => {
        setModel(false);
        setTempImgSrc("");
      };


   
  return (
    <section id="producto">
      <div className="relative px-6 py-20 md:py-20 ">
        <div className="block max-m-5xl mx-auto">
          <h2 className="text-4xl font-semibold mt-12 mb-8 md:mb-3 text-[#FECA01]">
            Fotografía de Producto
          </h2>
          <p className="sm:text-base text-sm lg:text-lg text-white md:mb-8">
          Explora los productos de MAY Tecnología Capilar en nuestra colección fotográfica. Desde KIT de Pigmentos hasta pistolas con nanotecnología, cada imagen resalta la calidad y elegancia del producto. Con más de 40 fotografías, seleccioné minuciosamente 15 fotografías para destacar en esta sección. Como diseñador, incorporé el uso de equipo fotográfico y edición en Adobe Photoshop para obtener el resultado solicitado por el cliente.
          </p>
        </div>
        <div className="md:grid md:grid-cols-3">
          <div className={model ? "model open" : "model"}>
            <img
              src={tempImgSrc}
              alt="Imagen en pantalla completa"
              className="w-full h-full object-contain"
            />
            <XMarkIcon
              className="h-8 w-8 text-white absolute top-4 right-4 cursor-pointer hover:text-[#FECA01]"
              onClick={closeImage}
            />
          </div>
          
          <div className="gallery md:col-span-3 grid grid-cols-1 md:grid-cols-3 gap-8">
            {data.map((item, index) => (
              <div
                className="pics relative"
                key={index}
                onClick={() => getImg(item.imagSrc)}
              >
                <Image
                  className="cursor-pointer mt-2 transition-opacity duration-300 hover:opacity-80"
                  alt="Imagen de infografía realizada"
                  src={item.imagSrc}
                  width={200}
                  height={200}
                  layout="responsive"
                />
                <div className="info-container grid grid-cols-7">
                  <div className="col-span-6">
                    <h3 className="text-lg font-semibold text-[#FECA01] ml-4">{item.title}</h3>
                    <p className="text-sm text-gray-300 ml-4">{item.description}</p>
                  </div>
                  <div className="col-span-1 justify-end items-center ml-2">
                    {item.herramienta && (
                      Array.isArray(item.herramienta) ? (
                        item.herramienta.map((herramienta, index) => (
                          <Image
                            key={index}
                            src={herramienta}
                            alt={`Imagen en pantalla completa ${index + 1}`}
                            className={index > 0 ? "" : ""}
                            width={30}
                            height={30}
                          />
                        ))
                      ) : (
                        <Image
                          src={item.herramienta}
                          alt="Imagen en pantalla completa"
                          className=""
                          width={30}
                          height={30}
                        />
                      )
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="flex items-center justify-center mt-20">
          <Link href="/#projects">
            <div className="bg-[#0f0f0f] rounded-full border border-opacity-30 border-white px-6 py-3 text-xl cursor-pointer text-white hover:text-[#FECA01] hover:border-[#FECA01]">
              Diseño
            </div>
          </Link>
        </div>
      </div>
      
    </section>
  );
};

export default FotoProducto