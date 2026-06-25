import { Heart } from "lucide-react";
import { ShieldCheck } from "lucide-react";
import { Sparkles } from "lucide-react";
import { Award } from "lucide-react";
import { ArrowRight } from "lucide-react";


export default function Hero() {
  return (
    <>
      <section id="heroBanner" className= "bg-[url('/assets/heroBanner2.png')] h-180 bg-cover flex items-center justify-start px-[120px] max-lap:px-[40px] max-tab:px-5 max-mob:px-[20px] max-tab:bg-[url('/assets/heroBanner2-tablet.png')]  max-mob:bg-[url('/assets/heroBanner2-mobile.png')] max-mob:h-130">
        <div className="flex flex-col justify-center w-[550px] rounded-lg p-5 pt-[100px] max-tab:p-0 max-tab:pt-[50px] max-mob:pt-[0px]">
          <p className="text-[14px] font-semibold uppercase text-yellow-700 max-tab:text-[12px]">Beleza natural. Resultados&nbsp;extraordinários.</p>
          <h1 className="text-[52px] font-bold text-yellow-900 font-[cormorantGaramond] leading-[1.2] max-mob:text-[36px]">Sua melhor versão, com&nbsp;<span className="text-yellow-700">naturalidade</span></h1>
          <span className="text-[16px] block mt-5 max-tab:text-[14px] max-tab:max-w-[350px] max-tab:mt-[10px]">Harmonização facial personalizada para realçar sua beleza única e elevar sua autoestima.</span>
          <div className="flex gap-4">
            {/* <button className="text-[18px] px-4 py-2 rounded mt-6 block cursor-pointer text-white bg-yellow-900  transition-all duration-300 hover:shadow-xl shadow-yellow-700/50 hover:bg-yellow-700 max-tab:text-[16px] max-mob:text-[12px]">Agendar Consulta</button> */}
            <a href="#tratamentos" className="text-[18px] px-4 py-2 rounded mt-6 block cursor-pointer text-yellow-700 bg-white border border-yellow-700  transition-all duration-300 hover:bg-yellow-900 hover:text-white hover:border-yellow-900 max-tab:text-[16px] max-mob:text-[14px]">Conhecer Tratamentos <ArrowRight size={20} className="inline ml-2" /></a> 
          </div>
          <div className="flex gap-4 mt-10 max-tab:gap-2 max-mob:flex-wrap max-mob:max-w-[340px] max-mob:hidden">
              <div className="flex flex-col items-center justify-center text-center max-tab:w-[110px] max-mob:max-w-[50%]">
                <span className="text-yellow-700"> <Heart size={28} /></span>
                <span className="text-[16px] block mt-5 max-tab:text-[14px] max-tab:max-w-[350px] max-tab:mt-[10px]">Atendimento Humanizado</span>
              </div>
              <div className="flex flex-col items-center justify-center text-center max-tab:w-[110px] max-mob:max-w-[50%]">
                <span className="text-yellow-700"> <ShieldCheck size={28} /></span>
                <span className="text-[16px] block mt-5 max-tab:text-[14px] max-tab:max-w-[350px] max-tab:mt-[10px]">Procedimentos Seguros</span>
              </div>
              <div className="flex flex-col items-center justify-center text-center max-tab:w-[110px] max-mob:max-w-[50%]">
                <span className="text-yellow-700"> <Sparkles size={28} /></span>
                <span className="text-[16px] block mt-5 max-tab:text-[14px] max-tab:max-w-[350px] max-tab:mt-[10px]">Resultados Naturais</span>
              </div>
              <div className="flex flex-col items-center justify-center text-center max-tab:w-[110px] max-mob:max-w-[50%]">
                <span className="text-yellow-700"> <Award size={28} /></span>
                <span className="text-[16px] block mt-5 max-tab:text-[14px] max-tab:max-w-[350px] max-tab:mt-[10px]">Profissional Especializada</span>
              </div>
          </div>
        </div>
      </section>
    </>
  )
}
 
