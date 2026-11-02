
export default function Trataments() {
  return (
    <>
      <section id="tratamentos" className="bg-[#FEFCF9]">
        <h2 className="text-4xl font-bold text-[#2C1A0F] text-center py-15 pb-18 max-tab:pt-5 max-mob:text-[28px] max-mob:px-5 max-mob:pt-10">Nossos Tratamentos</h2>
        <div className="flex items-center justify-center gap-7 px-10 pb-4 max-lap:flex-wrap max-lap:gap-x-8 max-lap:gap-y-20 max-tab:px-5">
          
          <div className="flex flex-col items-center justify-end gap-4 text-center w-[500px] h-[430px] bg-white rounded-lg shadow-md transition-all duration-300 relative max-lap:w-[47%] max-lap:h-auto max-mob:w-full">
            <img src="/assets/trat-limpeza.svg" alt="" className="bg-[#fff3f1] p-3 rounded-full absolute top-[-45px] flex items-center justify-center w-[110px] max-lap:w-[90px]" />
            <h3 className="text-xl font-bold text-[#2C1A0F] px-4 pt-12">Limpeza de Pele</h3>
            <span className="text-gray-600 px-6 max-lap:max-w-[350px]">Remove impurezas, controla a oleosidade e deixa a pele renovada e saudável.</span>
            {/* <span className="text-yellow-700 hover:text-yellow-900 cursor-pointer">Saiba mais</span> */}
            <img src="../assets/card1.png" alt="Limpeza de Pele" className="w-full h-[200px] object-cover rounded-b-lg max-lap:h-[350px]" />
          </div>

          <div className="flex flex-col items-center justify-end gap-4 text-center w-[500px] h-[430px] bg-white rounded-lg shadow-md transition-all duration-300 relative max-lap:w-[47%] max-lap:h-auto max-mob:w-full">
            <img src="/assets/trat-microagulhamento.svg" alt="" className="bg-[#fff3f1] p-3 rounded-full absolute top-[-45px] flex items-center justify-center w-[110px] max-lap:w-[90px]" />
            <h3 className="text-xl font-bold text-[#2C1A0F] px-4 pt-12">Microagulhamento</h3>
            <span className="text-gray-600 px-6 max-lap:max-w-[350px]">Estimula o colágeno e melhora cicatrizes de acne, estrias e a textura da pele.</span>
            {/* <span className="text-yellow-700 hover:text-yellow-900 cursor-pointer">Saiba mais</span> */}
            <img src="../assets/card2.png" alt="Microagulhamento" className="w-full h-[200px] object-cover rounded-b-lg max-lap:h-[350px]" />
          </div>

          <div className="flex flex-col items-center justify-end gap-4 text-center w-[500px] h-[430px] bg-white rounded-lg shadow-md transition-all duration-300 relative max-lap:w-[47%] max-lap:h-auto max-mob:w-full">
            <img src="/assets/trat-corporal.svg" alt="" className="bg-[#fff3f1] p-3 rounded-full absolute top-[-45px] flex items-center justify-center w-[110px] max-lap:w-[90px]" />
            <h3 className="text-xl font-bold text-[#2C1A0F] px-4 pt-12">Tratamentos Corporais</h3>
            <span className="text-gray-600 px-6 max-lap:max-w-[350px]">Endermoterapia e carboxiterapia para gordura localizada, celulite e contorno corporal.</span>
            {/* <span className="text-yellow-700 hover:text-yellow-900 cursor-pointer">Saiba mais</span> */}
            <img src="../assets/card3.png" alt="Tratamentos Corporais" className="w-full h-[200px] object-cover rounded-b-lg max-lap:h-[350px]" />
          </div>

          <div className="flex flex-col items-center justify-end gap-4 text-center w-[500px] h-[430px] bg-white rounded-lg shadow-md transition-all duration-300 relative max-lap:w-[47%] max-lap:h-auto max-mob:w-full">
            <img src="/assets/trat-massagem.svg" alt="" className="bg-[#fff3f1] p-3 rounded-full absolute top-[-45px] flex items-center justify-center w-[110px] max-lap:w-[90px]" />
            <h3 className="text-xl font-bold text-[#2C1A0F] px-4 pt-12">Massagem e Liberação Miofascial</h3>
            <span className="text-gray-600 px-6 max-lap:max-w-[350px]">Alivia tensões musculares e promove relaxamento e bem-estar para corpo e mente.</span>
            {/* <span className="text-yellow-700 hover:text-yellow-900 cursor-pointer">Saiba mais</span> */}
            <img src="../assets/card4.png" alt="Massagem e Liberação Miofascial" className="w-full h-[200px] object-cover rounded-b-lg max-lap:h-[350px]" />
          </div>
        </div>
         <a href="https://wa.me/5577900000000?text=Olá! Vim pelo site e gostaria de agendar uma consulta. Pode me passar mais informações sobre os tratamentos disponíveis?" className="w-[37%] max-w[400px] text-center mx-auto mt-[20px] mb-[60px] text-[18px] px-4 py-2 rounded mt-6 block cursor-pointer text-yellow-700 bg-white border border-yellow-700  transition-all duration-300 hover:bg-yellow-900 hover:text-white hover:border-yellow-900 max-tab:w-[49%] max-tab:max-w-[375px] max-mob:w-[80%] max-mob:max-w-[345px] max-mob:mb-[40px]">Conheça nossos tratamentos</a>
       
      </section>
    </>
  )
}
