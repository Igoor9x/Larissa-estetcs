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
          <h2 className="text-4xl font-bold text-[#2C1A0F] text-center pt-15 pb-10 max-mob:text-[28px]">O que nossas clientes&nbsp;dizem</h2>
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
                  <span className="text-[18px] max-tab:text-[16px]">Espaço para o depoimento real de uma cliente da Alanna.</span>
                  <p className="text-[20px] font-bold max-tab:text-[16px]">Nome da cliente</p>
              </div>
            </SwiperSlide>
             <SwiperSlide>
              <div className="flex flex-col items-start justify-center text-start gap-2 pt-10 pb-4 bg-white rounded-xl shadow-lg p-5">
                <div className="flex items-center justify-center gap-1 pb-2">
                  {[...Array(5)].map((_, index) => (
                    <Star key={index} size={20} color="#FFD700" fill="#FFD700" />
                  ))}
                </div>
                  <span className="text-[18px] max-tab:text-[16px]">Espaço para o depoimento real de uma cliente da Alanna.</span>
                  <p className="text-[20px] font-bold max-tab:text-[16px]">Nome da cliente</p>
              </div>
            </SwiperSlide>
             <SwiperSlide>
              <div className="flex flex-col items-start justify-center text-start gap-2 pt-10 pb-4 bg-white rounded-xl shadow-lg p-5">
                <div className="flex items-center justify-center gap-1 pb-2">
                  {[...Array(5)].map((_, index) => (
                    <Star key={index} size={20} color="#FFD700" fill="#FFD700" />
                  ))}
                </div>
                  <span className="text-[18px] max-tab:text-[16px]">Espaço para o depoimento real de uma cliente da Alanna.</span>
                  <p className="text-[20px] font-bold max-tab:text-[16px]">Nome da cliente</p>
              </div>
            </SwiperSlide>
             <SwiperSlide>
              <div className="flex flex-col items-start justify-center text-start gap-2 pt-10 pb-4 bg-white rounded-xl shadow-lg p-5">
                <div className="flex items-center justify-center gap-1 pb-2">
                  {[...Array(5)].map((_, index) => (
                    <Star key={index} size={20} color="#FFD700" fill="#FFD700" />
                  ))}
                </div>
                  <span className="text-[18px] max-tab:text-[16px]">Espaço para o depoimento real de uma cliente da Alanna.</span>
                  <p className="text-[20px] font-bold max-tab:text-[16px]">Nome da cliente</p>
              </div>
            </SwiperSlide>
             <SwiperSlide>
              <div className="flex flex-col items-start justify-center text-start gap-2 pt-10 pb-4 bg-white rounded-xl shadow-lg p-5">
                <div className="flex items-center justify-center gap-1 pb-2">
                  {[...Array(5)].map((_, index) => (
                    <Star key={index} size={20} color="#FFD700" fill="#FFD700" />
                  ))}
                </div>
                  <span className="text-[18px] max-tab:text-[16px]">Espaço para o depoimento real de uma cliente da Alanna.</span>
                  <p className="text-[20px] font-bold max-tab:text-[16px]">Nome da cliente</p>
              </div>
            </SwiperSlide>
             <SwiperSlide>
              <div className="flex flex-col items-start justify-center text-start gap-2 pt-10 pb-4 bg-white rounded-xl shadow-lg p-5">
                <div className="flex items-center justify-center gap-1 pb-2">
                  {[...Array(5)].map((_, index) => (
                    <Star key={index} size={20} color="#FFD700" fill="#FFD700" />
                  ))}
                </div>
                  <span className="text-[18px] max-tab:text-[16px]">Espaço para o depoimento real de uma cliente da Alanna.</span>
                  <p className="text-[20px] font-bold max-tab:text-[16px]">Nome da cliente</p>
              </div>
            </SwiperSlide>
             <SwiperSlide>
              <div className="flex flex-col items-start justify-center text-start gap-2 pt-10 pb-4 bg-white rounded-xl shadow-lg p-5">
                <div className="flex items-center justify-center gap-1 pb-2">
                  {[...Array(5)].map((_, index) => (
                    <Star key={index} size={20} color="#FFD700" fill="#FFD700" />
                  ))}
                </div>
                  <span className="text-[18px] max-tab:text-[16px]">Espaço para o depoimento real de uma cliente da Alanna.</span>
                  <p className="text-[20px] font-bold max-tab:text-[16px]">Nome da cliente</p>
              </div>
            </SwiperSlide>
             <SwiperSlide>
              <div className="flex flex-col items-start justify-center text-start gap-2 pt-10 pb-4 bg-white rounded-xl shadow-lg p-5">
                <div className="flex items-center justify-center gap-1 pb-2">
                  {[...Array(5)].map((_, index) => (
                    <Star key={index} size={20} color="#FFD700" fill="#FFD700" />
                  ))}
                </div>
                  <span className="text-[18px] max-tab:text-[16px]">Espaço para o depoimento real de uma cliente da Alanna.</span>
                  <p className="text-[20px] font-bold max-tab:text-[16px]">Nome da cliente</p>
              </div>
            </SwiperSlide>
        
          </Swiper>
        </div>
      </section>
    </>
  )
}
