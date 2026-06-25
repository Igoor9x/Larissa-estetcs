import { CircleCheck } from "lucide-react";
import { ArrowRight } from "lucide-react";

export default function About() {
  return (
    <>
    <section id="about">
      <div className=" flex px-10 gap-16 justify-center items-center max-lap:gap-10 max-tab:flex-col max-tab:gap-6 max-tab:px-5 max-tab:w-full bg-[#FEFCF9] py-10">
        <div className="w-auto h-[650px] rounded-xl max-mob:h-[400px]">
          <img 
            src="/assets/larissa-v3.png" 
            alt="Dra. Larissa Almeida" 
            className=" h-full object-cover rounded-xl"
          />
        </div>
         
        <div className="flex flex-col items-start justify-center text-start w-1/2 max-tab:w-[650px] max-mob:w-full">
          <div className="text-center lg:text-start py-2 w-[600px] max-lap:w-full ">
            <h2 className="text-[60px] font-semibold font-[cormorantGaramond] text-[#2C1A0F] leading-[1] max-mob:text-[34px]">Dra. Larissa&nbsp;Almeida</h2>
            <span className="text-lg text-yellow-700 max-mob:text-[14px]">Cirurgiã Especialista em Harmonização Facial</span>
            <p className="text-base text-gray-600 my-5 max-tab:text-start">
              Minha missão é realçar sua beleza de forma natural, respeitando sua individualidade e promovendo autoestima e bem estar.
            </p>
            <div className="flex flex-col gap-2 text-gray-600 text-start max-mob:text-[14px]">
              <div className="flex items-center gap-2">
                <span><CircleCheck /></span>
                <span>Formação especializada e constante atualização</span>
              </div>

              <div className="flex items-center gap-2">
                <span><CircleCheck /></span>
                <span>Atendimento humanizado e personalizado</span>
              </div>

              <div className="flex items-center gap-2">
                <span><CircleCheck /></span>
                <span>Tecnologia e produtos de alta qualidade</span>
              </div>

              <div className="flex items-center gap-2">
                <span><CircleCheck /></span>
                <span>Segurança e resultados naturais</span>
              </div>
            </div>
            <a href="https://wa.me/5577991236335?text=Olá! Vim pelo site e gostaria de agendar uma consulta. Pode me passar mais informações sobre os horários disponíveis?" className="max-w-[250px] justify-center flex gap-2 items-center text-[18px] px-4 py-2 rounded mt-6 block cursor-pointer text-white bg-yellow-900  transition-all duration-300 hover:shadow-xl shadow-yellow-700/50 hover:bg-yellow-700 max-tab:mx-auto">Agendar Consulta <ArrowRight size={20} /></a>
          </div>
        </div>

      </div>
    </section>
    </>
  )
}
