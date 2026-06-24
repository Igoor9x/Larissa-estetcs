
export default function Footer() {
  return (
    <>
      <div className=" px-10 py-10 bg-[#F9F3ED] flex align-start justify-between">
      <div className="max-w-[1440px] flex align-start gap-10 mx-auto">
        <div className="flex flex-col items-start justify-center text-start">
          <span className="text-[16px] font-semibold text-yellow-700 uppercase">Agende sua consulta</span>
          <h3 className="text-[22px] font-bold mb-4 leading-none text-[#8B4513]">Vamos realçar sua melhor versão?</h3>
          <span className="text-[14px] text-gray-600 mb-6">Entre em contato e agende sua avaliação personalizada.</span>
          <div className="flex gap-4 mb-6">
            <a 
              href="https://wa.me/5511999999999" 
              className="text-[18px] px-4 py-2 rounded mt-6 block cursor-pointer text-white bg-yellow-900  transition-all duration-300 hover:shadow-xl shadow-yellow-700/50 hover:bg-yellow-700">
              WhatsApp
            </a>
            <a 
              href="https://instagram.com" 
              className="text-[18px] px-4 py-2 rounded mt-6 block cursor-pointer text-yellow-700 bg-white border border-yellow-700  transition-all duration-300 hover:bg-yellow-900 hover:text-white hover:border-yellow-900">
                Instagram
            </a>
          </div>
          <div className="flex flex-col gap-2">
            <span> (11) 99999-9999 </span>
            <span> Centro médico Otavio Santos </span>
          </div>
        </div>

        <div className="">
          <span className="text-[16px] font-semibold text-yellow-700 uppercase">Localização</span>
          <img 
            src="/assets/location.png" 
            alt="Centro médico Otavio Santos" 
            className="rounded-lg mt-2 mb-2 w-[350px] h-[300px] object-cover"
          />
          <span className="text-center text-[18px] px-4 py-2 rounded mt-6 block cursor-pointer text-yellow-700 bg-white border border-yellow-700  transition-all duration-300 hover:bg-yellow-900 hover:text-white hover:border-yellow-900">Ver no Google Maps</span>
        </div>

        <div className="flex flex-col items-start justify-center text-start w-[350px]">
          <span className="text-[16px] font-semibold text-yellow-700 uppercase">Envie uma mensagem</span>
          <form className="flex flex-col gap-2 w-full mt-2">
            <input type="text" placeholder="Nome Completo" className="border-none rounded-md px-2 py-3 bg-white outline-none text-gray-700" />
            <input type="text" placeholder="WhatsApp" className="border-none rounded-md px-2 py-3 bg-white outline-none text-gray-700" />
            <input type="email" placeholder="Email" className="border-none rounded-md px-2 py-3 bg-white outline-none text-gray-700" />
            <textarea placeholder="Como podemos ajudar?" className="border-none rounded-md px-2 py-3 bg-white outline-none text-gray-700"></textarea>
            <button type="submit" className="bg-yellow-900 text-white py-2 px-4 rounded-md hover:bg-yellow-700 transition duration-300">Enviar</button>
          </form>
        </div>
      </div>
      </div>
    </>
  )
}
