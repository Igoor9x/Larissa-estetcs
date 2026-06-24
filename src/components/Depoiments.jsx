"use client";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Star } from "lucide-react";

export default function Depoiments() {
  return (
    <>
      <div className="bg-[#FCF8F2]">
        <div className="flex flex-col items-center justify-center text-center gap-2 pb-4">
          <h2 className="text-4xl font-bold text-[#2C1A0F] text-center pt-10 pb-5">O que nossas pacientes dizem</h2>
        </div>
        <div className=" pb-20">
          <Swiper 
            className="testimonials-swiper"
            modules={[Navigation, Pagination]}
            slidesPerView={3.5}
            spaceBetween={25}
            loop={true}
            centeredSlides={true}
            watchSlidesProgress={true}
            navigation={true}
            pagination={{ clickable: true }}
          >
            <SwiperSlide>
              <div className="flex flex-col items-start justify-center text-start gap-2 pt-10 pb-4 bg-white rounded-xl shadow-lg p-5">
                <div className="flex items-center justify-center gap-1 pb-2">
                  {[...Array(5)].map((_, index) => (
                    <Star key={index} size={20} color="#FFD700" fill="#FFD700" />
                  ))}
                </div>
                  <span className="text-lg">"Eu queria melhorar minha aparência sem perder minha identidade, e foi exatamente isso que aconteceu. O resultado ficou extremamente natural e recebo elogios até hoje."</span>
                  <p className="text-xl font-bold">Mariana S.</p>
              </div>
            </SwiperSlide>
             <SwiperSlide>
              <div className="flex flex-col items-start justify-center text-start gap-2 pt-10 pb-4 bg-white rounded-xl shadow-lg p-5">
                <div className="flex items-center justify-center gap-1 pb-2">
                  {[...Array(5)].map((_, index) => (
                    <Star key={index} size={20} color="#FFD700" fill="#FFD700" />
                  ))}
                </div>
                  <span className="text-lg">"Desde a primeira consulta me senti segura. A atenção aos detalhes e o cuidado durante todo o processo fizeram toda a diferença."</span>
                  <p className="text-xl font-bold">Juliana R.</p>
              </div>
            </SwiperSlide>
             <SwiperSlide>
              <div className="flex flex-col items-start justify-center text-start gap-2 pt-10 pb-4 bg-white rounded-xl shadow-lg p-5">
                <div className="flex items-center justify-center gap-1 pb-2">
                  {[...Array(5)].map((_, index) => (
                    <Star key={index} size={20} color="#FFD700" fill="#FFD700" />
                  ))}
                </div>
                  <span className="text-lg">"Minha autoestima mudou completamente. O resultado ficou delicado, elegante e muito acima das minhas expectativas."</span>
                  <p className="text-xl font-bold">Camila A.</p>
              </div>
            </SwiperSlide>
             <SwiperSlide>
              <div className="flex flex-col items-start justify-center text-start gap-2 pt-10 pb-4 bg-white rounded-xl shadow-lg p-5">
                <div className="flex items-center justify-center gap-1 pb-2">
                  {[...Array(5)].map((_, index) => (
                    <Star key={index} size={20} color="#FFD700" fill="#FFD700" />
                  ))}
                </div>
                  <span className="text-lg">"Estava com receio de ficar artificial, mas o resultado ficou tão natural que as pessoas apenas comentam que pareço mais descansada e bonita."</span>
                  <p className="text-xl font-bold">Fernanda M.</p>
              </div>
            </SwiperSlide>
             <SwiperSlide>
              <div className="flex flex-col items-start justify-center text-start gap-2 pt-10 pb-4 bg-white rounded-xl shadow-lg p-5">
                <div className="flex items-center justify-center gap-1 pb-2">
                  {[...Array(5)].map((_, index) => (
                    <Star key={index} size={20} color="#FFD700" fill="#FFD700" />
                  ))}
                </div>
                  <span className="text-lg">"Profissional extremamente atenciosa e cuidadosa. Explicou cada etapa e me deixou muito tranquila durante todo o procedimento."</span>
                  <p className="text-xl font-bold">Patrícia L.</p>
              </div>
            </SwiperSlide>
             <SwiperSlide>
              <div className="flex flex-col items-start justify-center text-start gap-2 pt-10 pb-4 bg-white rounded-xl shadow-lg p-5">
                <div className="flex items-center justify-center gap-1 pb-2">
                  {[...Array(5)].map((_, index) => (
                    <Star key={index} size={20} color="#FFD700" fill="#FFD700" />
                  ))}
                </div>
                  <span className="text-lg">"O atendimento é impecável e o ambiente muito acolhedor. Fiquei encantada com o resultado e com todo o acompanhamento."</span>
                  <p className="text-xl font-bold">Beatriz C.</p>
              </div>
            </SwiperSlide>
             <SwiperSlide>
              <div className="flex flex-col items-start justify-center text-start gap-2 pt-10 pb-4 bg-white rounded-xl shadow-lg p-5">
                <div className="flex items-center justify-center gap-1 pb-2">
                  {[...Array(5)].map((_, index) => (
                    <Star key={index} size={20} color="#FFD700" fill="#FFD700" />
                  ))}
                </div>
                  <span className="text-lg">"Foi a melhor decisão que tomei. O tratamento valorizou meus traços sem exageros e me devolveu muita confiança."</span>
                  <p className="text-xl font-bold">Larissa P.</p>
              </div>
            </SwiperSlide>
             <SwiperSlide>
              <div className="flex flex-col items-start justify-center text-start gap-2 pt-10 pb-4 bg-white rounded-xl shadow-lg p-5">
                <div className="flex items-center justify-center gap-1 pb-2">
                  {[...Array(5)].map((_, index) => (
                    <Star key={index} size={20} color="#FFD700" fill="#FFD700" />
                  ))}
                </div>
                  <span className="text-lg">"Já fiz procedimentos em outros lugares, mas nunca tive uma experiência tão positiva. Resultado natural, atendimento humanizado e muito profissionalismo."</span>
                  <p className="text-xl font-bold">Amanda F.</p>
              </div>
            </SwiperSlide>
        
          </Swiper>
        </div>
      </div>
    </>
  )
}
