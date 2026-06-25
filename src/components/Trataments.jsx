import FaceIcon from "./icons/FaceIcon.jsx";

export default function Trataments() {
  return (
    <>
      <section id="tratamentos" className="bg-[#FEFCF9]">
        <h2 className="text-4xl font-bold text-[#2C1A0F] text-center py-15 pb-18 max-tab:pt-5 max-mob:text-[28px] max-mob:px-5">Nossos Tratamentos</h2>
        <div className="flex items-center justify-center gap-8 px-10 pb-4 max-lap:flex-wrap max-lap:gap-x-8 max-lap:gap-y-20 max-tab:px-5">
          
          <div className="flex flex-col items-center justify-end gap-4 text-center w-[500px] h-[430px] bg-white rounded-lg shadow-md transition-all duration-300 relative max-lap:w-[47%] max-lap:h-auto max-mob:w-full">
            <span className="bg-[#fff3f1] p-3 rounded-full absolute top-[-45px] w-[80px] h-[80px] flex items-center justify-center"><FaceIcon /></span>
            <h3 className="text-xl font-bold text-[#2C1A0F] px-4 pt-12">Harmonização Facial</h3>
            <span className="text-gray-600 px-6 max-lap:max-w-[350px]">Equilíbrio e harmonia para realçar sua beleza natural.</span>
            <span className="text-yellow-700 hover:text-yellow-900 cursor-pointer">Saiba mais</span>
            <img src="../assets/card1.png" alt="Harmonização Facial" className="w-full h-[200px] object-cover rounded-b-lg max-lap:h-[350px]" />
          </div>

          <div className="flex flex-col items-center justify-end gap-4 text-center w-[500px] h-[430px] bg-white rounded-lg shadow-md transition-all duration-300 relative max-lap:w-[47%] max-lap:h-auto max-mob:w-full">
            <span className="bg-[#fff3f1] p-3 rounded-full absolute top-[-45px] w-[80px] h-[80px] flex items-center justify-center"><FaceIcon /></span>
            <h3 className="text-xl font-bold text-[#2C1A0F] px-4 pt-12">Toxina Botulínica</h3>
            <span className="text-gray-600 px-6 max-lap:max-w-[350px]">Suaviza rugas e linhas de expressão com naturalidade.</span>
            <span className="text-yellow-700 hover:text-yellow-900 cursor-pointer">Saiba mais</span>
            <img src="../assets/card2.png" alt="Toxina Botulínica" className="w-full h-[200px] object-cover rounded-b-lg max-lap:h-[350px]" />
          </div>

          <div className="flex flex-col items-center justify-end gap-4 text-center w-[500px] h-[430px] bg-white rounded-lg shadow-md transition-all duration-300 relative max-lap:w-[47%] max-lap:h-auto max-mob:w-full">
            <span className="bg-[#fff3f1] p-3 rounded-full absolute top-[-45px] w-[80px] h-[80px] flex items-center justify-center"><FaceIcon /></span>
            <h3 className="text-xl font-bold text-[#2C1A0F] px-4 pt-12">Preenchimento</h3>
            <span className="text-gray-600 px-6 max-lap:max-w-[350px]">Volume e contorno para um resultado sofisticado.</span>
            <span className="text-yellow-700 hover:text-yellow-900 cursor-pointer">Saiba mais</span>
            <img src="../assets/card3.png" alt="Preenchimento" className="w-full h-[200px] object-cover rounded-b-lg max-lap:h-[350px]" />
          </div>

          <div className="flex flex-col items-center justify-end gap-4 text-center w-[500px] h-[430px] bg-white rounded-lg shadow-md transition-all duration-300 relative max-lap:w-[47%] max-lap:h-auto max-mob:w-full">
            <span className="bg-[#fff3f1] p-3 rounded-full absolute top-[-45px] w-[80px] h-[80px] flex items-center justify-center"><FaceIcon /></span>
            <h3 className="text-xl font-bold text-[#2C1A0F] px-4 pt-12">Bioestimuladores</h3>
            <span className="text-gray-600 px-6 max-lap:max-w-[350px]">Estimula o colágeno e melhora a firmeza da pele.</span>
            <span className="text-yellow-700 hover:text-yellow-900 cursor-pointer">Saiba mais</span>
            <img src="../assets/card4.png" alt="Bioestimuladores" className="w-full h-[200px] object-cover rounded-b-lg max-lap:h-[350px]" />
          </div>
        </div>
         <a href="https://wa.me/5577991236335?text=Olá! Vim pelo site e gostaria de agendar uma consulta. Pode me passar mais informações sobre os tratamentos disponíveis?" className="w-[37%] max-w[400px] text-center mx-auto mt-[20px] mb-[60px] text-[18px] px-4 py-2 rounded mt-6 block cursor-pointer text-yellow-700 bg-white border border-yellow-700  transition-all duration-300 hover:bg-yellow-900 hover:text-white hover:border-yellow-900 max-tab:w-[49%] max-tab:max-w-[375px] max-mob:w-[80%] max-mob:max-w-[345px]">Conheça nossos tratamentos</a>
       
      </section>
    </>
  )
}
