"use client";
import { useState } from "react";
import { FaWhatsapp, FaInstagram } from "react-icons/fa";
import { MapPin, Phone } from "lucide-react";


export default function Footer() {


  return (
    <>
    <section id="contato" className="bg-[#FEFCF9]">
      <h2 className="text-[36px] font-bold mb-4 text-center pt-10 pb-0 max-tab:pt-10 max-mob:text-[28px] max-mob:mb-0">Venha nos conhecer</h2>
      <div className=" px-10 py-10 flex items-start justify-between max-tab:px-5">
        <div className="max-w-[1440px] flex items-start gap-10 mx-auto max-lap:flex-wrap-reverse max-lap:justify-center">

          <div className="flex flex-col items-start justify-center text-start w-[350px] max-mob:w-full">
            <span className="text-[16px] font-semibold text-yellow-700 uppercase mb-4">Envie uma mensagem</span>
            <form className="flex flex-col gap-2 w-full mt-2">
              <input type="text" placeholder="Nome Completo" className="border-none rounded-md px-2 py-3 bg-white outline-none text-gray-700" />
              <input type="text" placeholder="WhatsApp" className="border-none rounded-md px-2 py-3 bg-white outline-none text-gray-700" />
              <input type="email" placeholder="Email" className="border-none rounded-md px-2 py-3 bg-white outline-none text-gray-700" />
              <textarea placeholder="Como podemos ajudar?" className="border-none rounded-md px-2 py-3 bg-white outline-none text-gray-700"></textarea>
              <button type="submit" className="bg-yellow-900 text-white py-2 px-4 rounded-md hover:bg-yellow-700 transition duration-300">Enviar</button>
            </form>
          </div>

          <div className="flex flex-col items-start justify-center text-start max-lap:w-[43%] max-mob:w-full">
            <span className="text-[16px] font-semibold text-yellow-700 uppercase mb-4">Agende sua consulta</span>
            <h3 className="text-[22px] font-bold mb-4 leading text-[#8B4513] leading-[1.3]">Vamos realçar sua melhor&nbsp;versão?</h3>
            <span className="text-[14px] text-gray-600 mb-6">Entre em contato e agende sua avaliação personalizada.</span>
            <div className="flex gap-4 mb-6">
              <a 
                href="https://wa.me/5577991236335?text=Olá! Vim pelo site e gostaria de agendar uma consulta. Pode me passar mais informações sobre os horários disponíveis?" 
                className="flex items-center gap-2 text-[18px] px-4 py-2 rounded mt-6 block cursor-pointer text-white bg-yellow-900  transition-all duration-300 hover:shadow-xl shadow-yellow-700/50 hover:bg-yellow-700 max-mob:mt-0">
                <FaWhatsapp size={20} /> WhatsApp
              </a>
              <a 
                href="https://www.instagram.com/dralarissaalm/" 
                className="flex items-center gap-2 text-[18px] px-4 py-2 rounded mt-6 block cursor-pointer text-yellow-700 bg-white border border-yellow-700  transition-all duration-300 hover:bg-yellow-900 hover:text-white hover:border-yellow-900 max-mob:mt-0">
                  <FaInstagram size={20} /> Instagram 
              </a>
            </div>
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-2">
                <span><Phone size={16} /></span>
                <span className="flex items-center gap-2">(77) 99123-6335</span>
              </div>
              <div className="flex items-center gap-2">
                <span><MapPin size={16} /></span>
                <span className="flex items-center gap-2"> Av. Otávio Santos, 227 - Recreio, Vitória da Conquista - BA, 45020-310</span>
              </div>
            </div>
          </div>

          

          <div className="w-[350px] max-lap:w-full">
            <span className="text-[16px] font-semibold text-yellow-700 uppercase mb-4">Localização</span>
            <img 
              src="/assets/location2.png" 
              alt="Centro médico Otavio Santos" 
              className="rounded-lg mt-2 mb-2 w-[350px] h-[320px] object-cover max-lap:w-full max-lap:h-[420px]"
            />
            <a href="https://maps.app.goo.gl/LwSqD6rW6jXQacdf7" target="_blank" rel="noopener noreferrer" className="text-center text-[18px] px-4 py-2 rounded mt-6 block cursor-pointer text-yellow-700 bg-white border border-yellow-700  transition-all duration-300 hover:bg-yellow-900 hover:text-white hover:border-yellow-900">Ver no Google Maps</a>
          </div>

        </div>
      </div>

      <div className="gap-4 border-t py-4 px-5 text-[14px] text-yellow-900 max-mob:text-[12px]">
        <div className="flex justify-around items-center max-w-[1440px] max-mob:flex-col">
          <img src="/assets/logo2.png" alt="Logo" className="w-auto h-20" />
          <span className="max-mob:text-center">© 2026 Larissa Almeida Harmonização Facial. Todos&nbsp;os&nbsp;direitos&nbsp;reservados.</span>
        </div>
      </div>
      
    </section>
    </>
  )
}
