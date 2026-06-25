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
      <section id="depoimentos" className="bg-[#FCF8F2]">
        <div className="flex flex-col items-center justify-center text-center gap-2 pb-4 max-mob:px-5">
          <h2 className="text-4xl font-bold text-[#2C1A0F] text-center pt-15 pb-10 max-mob:text-[28px]">O que nossas pacientes&nbsp;dizem</h2>
        </div>
        <div className=" pb-20 max-tab:pb-10">
          <Swiper 
            className="testimonials-swiper"
            modules={[Navigation, Pagination]}
            spaceBetween={25}
            loop={true}
            watchSlidesProgress={true}
            navigation={true}
            pagination={{ clickable: true }}
            centeredSlides={true}
            breakpoints={{
               0: {
                slidesPerView: 1.3,
              },
              768: {
                slidesPerView: 1.7,
              },
              1024: {
                slidesPerView: 3.5,
              },
              1280: {
                slidesPerView: 3.5,
              },
            }}
          >
            <SwiperSlide>
              <div className="flex flex-col items-start justify-center text-start gap-2 pt-10 pb-4 bg-white rounded-xl shadow-lg p-5">
                <div className="flex items-center justify-center gap-1 pb-2">
                  {[...Array(5)].map((_, index) => (
                    <Star key={index} size={20} color="#FFD700" fill="#FFD700" />
                  ))}
                </div>
                  <span className="text-[18px] max-tab:text-[16px]">"Eu queria melhorar minha aparência sem perder minha identidade, e foi exatamente isso que aconteceu. O resultado ficou extremamente natural e recebo elogios até hoje."</span>
                  <p className="text-[20px] font-bold max-tab:text-[16px]">Mariana S.</p>
              </div>
            </SwiperSlide>
             <SwiperSlide>
              <div className="flex flex-col items-start justify-center text-start gap-2 pt-10 pb-4 bg-white rounded-xl shadow-lg p-5">
                <div className="flex items-center justify-center gap-1 pb-2">
                  {[...Array(5)].map((_, index) => (
                    <Star key={index} size={20} color="#FFD700" fill="#FFD700" />
                  ))}
                </div>
                  <span className="text-[18px] max-tab:text-[16px]">"Desde a primeira consulta me senti segura. A atenção aos detalhes e o cuidado durante todo o processo fizeram toda a diferença."</span>
                  <p className="text-[20px] font-bold max-tab:text-[16px]">Juliana R.</p>
              </div>
            </SwiperSlide>
             <SwiperSlide>
              <div className="flex flex-col items-start justify-center text-start gap-2 pt-10 pb-4 bg-white rounded-xl shadow-lg p-5">
                <div className="flex items-center justify-center gap-1 pb-2">
                  {[...Array(5)].map((_, index) => (
                    <Star key={index} size={20} color="#FFD700" fill="#FFD700" />
                  ))}
                </div>
                  <span className="text-[18px] max-tab:text-[16px]">"Minha autoestima mudou completamente. O resultado ficou delicado, elegante e muito acima das minhas expectativas."</span>
                  <p className="text-[20px] font-bold max-tab:text-[16px]">Camila A.</p>
              </div>
            </SwiperSlide>
             <SwiperSlide>
              <div className="flex flex-col items-start justify-center text-start gap-2 pt-10 pb-4 bg-white rounded-xl shadow-lg p-5">
                <div className="flex items-center justify-center gap-1 pb-2">
                  {[...Array(5)].map((_, index) => (
                    <Star key={index} size={20} color="#FFD700" fill="#FFD700" />
                  ))}
                </div>
                  <span className="text-[18px] max-tab:text-[16px]">"Estava com receio de ficar artificial, mas o resultado ficou tão natural que as pessoas apenas comentam que pareço mais descansada e bonita."</span>
                  <p className="text-[20px] font-bold max-tab:text-[16px]">Fernanda M.</p>
              </div>
            </SwiperSlide>
             <SwiperSlide>
              <div className="flex flex-col items-start justify-center text-start gap-2 pt-10 pb-4 bg-white rounded-xl shadow-lg p-5">
                <div className="flex items-center justify-center gap-1 pb-2">
                  {[...Array(5)].map((_, index) => (
                    <Star key={index} size={20} color="#FFD700" fill="#FFD700" />
                  ))}
                </div>
                  <span className="text-[18px] max-tab:text-[16px]">"Profissional extremamente atenciosa e cuidadosa. Explicou cada etapa e me deixou muito tranquila durante todo o procedimento."</span>
                  <p className="text-[20px] font-bold max-tab:text-[16px]">Patrícia L.</p>
              </div>
            </SwiperSlide>
             <SwiperSlide>
              <div className="flex flex-col items-start justify-center text-start gap-2 pt-10 pb-4 bg-white rounded-xl shadow-lg p-5">
                <div className="flex items-center justify-center gap-1 pb-2">
                  {[...Array(5)].map((_, index) => (
                    <Star key={index} size={20} color="#FFD700" fill="#FFD700" />
                  ))}
                </div>
                  <span className="text-[18px] max-tab:text-[16px]">"O atendimento é impecável e o ambiente muito acolhedor. Fiquei encantada com o resultado e com todo o acompanhamento."</span>
                  <p className="text-[20px] font-bold max-tab:text-[16px]">Beatriz C.</p>
              </div>
            </SwiperSlide>
             <SwiperSlide>
              <div className="flex flex-col items-start justify-center text-start gap-2 pt-10 pb-4 bg-white rounded-xl shadow-lg p-5">
                <div className="flex items-center justify-center gap-1 pb-2">
                  {[...Array(5)].map((_, index) => (
                    <Star key={index} size={20} color="#FFD700" fill="#FFD700" />
                  ))}
                </div>
                  <span className="text-[18px] max-tab:text-[16px]">"Foi a melhor decisão que tomei. O tratamento valorizou meus traços sem exageros e me devolveu muita confiança."</span>
                  <p className="text-[20px] font-bold max-tab:text-[16px]">Larissa P.</p>
              </div>
            </SwiperSlide>
             <SwiperSlide>
              <div className="flex flex-col items-start justify-center text-start gap-2 pt-10 pb-4 bg-white rounded-xl shadow-lg p-5">
                <div className="flex items-center justify-center gap-1 pb-2">
                  {[...Array(5)].map((_, index) => (
                    <Star key={index} size={20} color="#FFD700" fill="#FFD700" />
                  ))}
                </div>
                  <span className="text-[18px] max-tab:text-[16px]">"Já fiz procedimentos em outros lugares, mas nunca tive uma experiência tão positiva. Resultado natural, atendimento humanizado e muito profissionalismo."</span>
                  <p className="text-[20px] font-bold max-tab:text-[16px]">Amanda F.</p>
              </div>
            </SwiperSlide>
        
          </Swiper>
        </div>
      </section>
    </>
  )
}
