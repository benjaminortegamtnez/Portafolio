"use client"
import 'swiper/css';
import 'swiper/css/effect-cards';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import {EffectCards} from 'swiper/modules';
import DisenoLogoCardsData from './DisenoLogoCardsData';

const DisenoInfografiaCard = () => {

  return (
    <section id="infografia">
    <div className="relative px-6 py-20 md:py-64">
      <div className="block max-m-5xl mx-auto md:grid md:grid-cols-2">
        <div>
        <h2 className="text-4xl font-semibold mt-4 mb-8 md:mb-12 text-transparent bg-clip-text bg-gradient-to-br from-[#A37D04] via-[#FECA01] to-[#FFD757]">
          Infografías
          <span className="block text-2xl text-white">Desliza y observa las Infografías creadas.</span>
        </h2>
        <p className="text-base lg:text-lg text-white">
        Te invito a explorar los logotipos, desde símbolos impactantes hasta marcas de productos memorables.
          </p>
          </div>
        <div className="px-5 mt-5">
          <Swiper
            effect={"cards"}  // Corrige el nombre del efecto a "cards"
            grabCursor={true}
            modules={[EffectCards]}
          >
            {DisenoLogoCardsData.map((card) => (  // Corrige la sintaxis del mapeo
              <SwiperSlide key={card.id}>
                <img src={card.image} alt={`Logotipo ${card.id}`} width="400" height="300" />
                {/* <h3 className="text-white text-center text-xl mt-2" style={{ background: '#000'}}> {card.title}</h3> */}
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
    </section>
  );
};

export default DisenoInfografiaCard;
