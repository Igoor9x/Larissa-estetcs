"use client";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import "swiper/css/navigation";
import "swiper/css/pagination";


export default function Results() {
  return (
    <>
      <div>
        <div className="flex flex-col items-center justify-center text-center gap-2 pt-10 pb-4">
          <h2 className="text-4xl font-bold text-[#2C1A0F] text-center py-10 pb-0">Resultados que falam por si</h2>
          <span className="mt-2 text-[#5D4037]">
            Veja alguns resultados reais de nossas pacientes.
          </span>
        </div>
        <div className="px-10 pb-20">
          <Swiper 
           modules={[Navigation, Pagination,]}
            slidesPerView={3}
            spaceBetween={25}
            navigation={true}
            pagination={{ clickable: true }}
          >
            <SwiperSlide><img src="../assets/resultado1.png" alt="Result 1" className="rounded-xl" /></SwiperSlide>
            <SwiperSlide><img src="../assets/resultado2.png" alt="Result 2" className="rounded-xl" /></SwiperSlide>
            <SwiperSlide><img src="../assets/resultado3.png" alt="Result 3" className="rounded-xl" /></SwiperSlide>
            <SwiperSlide><img src="../assets/resultado4.png" alt="Result 4" className="rounded-xl" /></SwiperSlide>
            <SwiperSlide><img src="../assets/resultado5.png" alt="Result 5" className="rounded-xl" /></SwiperSlide>
            <SwiperSlide><img src="../assets/resultado6.png" alt="Result 6" className="rounded-xl" /></SwiperSlide>
          </Swiper>
        </div>
      </div>
    </>
  )
}
