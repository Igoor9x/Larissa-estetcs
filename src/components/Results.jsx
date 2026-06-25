"use client";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import "swiper/css/navigation";
import "swiper/css/pagination";


export default function Results() {
  return (
    <>
      <section id="resultados">
        <div className="flex flex-col items-center justify-center text-center gap-2 pt-10 pb-4 max-mob:px-5">
          <h2 className="text-4xl font-bold text-[#2C1A0F] text-center py-10 pb-0 max-tab:pt-5 max-mob:pt-0 max-mob:text-[28px]">Resultados que falam&nbsp;por&nbsp;si</h2>
          <span className="mt-2 text-[#5D4037]">
            Veja alguns resultados reais de nossas&nbsp;pacientes.
          </span>
        </div>
        <div className="px-10 pb-20 max-tab:px-5 max-tab:pb-10">
          <Swiper 
           modules={[Navigation, Pagination,]}
            spaceBetween={25}
            navigation={true}
            pagination={{ clickable: true }}
            breakpoints={{
               0: {
                slidesPerView: 1,
              },
              768: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3.,
              },
              1280: {
                slidesPerView: 3.,
              },
            }}
          >
            <SwiperSlide><img src="../assets/resultado1.png" alt="Result 1" className="rounded-xl max-h-[500px]" /></SwiperSlide>
            <SwiperSlide><img src="../assets/resultado2.png" alt="Result 2" className="rounded-xl max-h-[500px]" /></SwiperSlide>
            <SwiperSlide><img src="../assets/resultado3.png" alt="Result 3" className="rounded-xl max-h-[500px]" /></SwiperSlide>
            <SwiperSlide><img src="../assets/resultado4.png" alt="Result 4" className="rounded-xl max-h-[500px]" /></SwiperSlide>
            <SwiperSlide><img src="../assets/resultado5.png" alt="Result 5" className="rounded-xl max-h-[500px]" /></SwiperSlide>
            <SwiperSlide><img src="../assets/resultado6.png" alt="Result 6" className="rounded-xl max-h-[500px]" /></SwiperSlide>
          </Swiper>
        </div>
      </section>
    </>
  )
}
