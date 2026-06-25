
"use client";

import { useEffect, useState } from "react";

export default function Header() {
  const [activeSection, setActiveSection] = useState("heroBanner");
  const [isScrolled, setIsScrolled] = useState(false);

   useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section[id]");

      let currentSection = "heroBanner";

      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const headerOffset = 90;

        if (window.scrollY >= sectionTop - headerOffset) {
          currentSection = section.getAttribute("id");
        }
      });

      setActiveSection(currentSection);
      setIsScrolled(window.scrollY > 10);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <header className= {`${activeSection === "heroBanner" && !isScrolled ? "bg-transparent w-full h-16 flex items-center justify-center gap-12 px-10 fixed transition-colors duration-300 z-3 max-lap:px-5 max-tab:bg-transparent max-tab:shadow-none" : "bg-white w-full h-16 flex items-center justify-center gap-12 px-10 fixed shadow-sm transition-colors duration-300 z-3 max-lap:px-5 max-lap:gap-10  max-tab:absolute max-tab:bg-transparent max-tab:shadow-none"}`}>
        <div className="hidden max-tab:flex">

        </div>
        <div className="text-2xl font-bold text-yellow-900">
          <img src="/assets/logo2.png" alt="Larissa" className="w-[120px] pt-3 " />
        </div>
        <nav>
          <ul className="flex items-center justify-center space-x-6 max-tab:hidden">
            <li><a
              href="#heroBanner"
              className={`${
                activeSection === "heroBanner"
                  ? "text-yellow-700 font-semibold text-[18px] border-b"
                  : "text-gray-700 text-[16px]"
              } hover:text-yellow-700`}
            >
              Início
            </a></li>
            <li><a href="#tratamentos" 
              className={`${
              activeSection === "tratamentos"
                ? "text-yellow-700 font-semibold text-[18px] border-b"
                : "text-gray-700 text-[16px]"
            } hover:text-yellow-700`}
            >
              Tratamentos
            </a></li>
            <li><a
              href="#about"
              className={`${
                activeSection === "about"
                  ? "text-yellow-700 font-semibold text-[18px] border-b"
                  : "text-gray-700 text-[16px]"
              } hover:text-yellow-700`}
            >
              Sobre
            </a></li>
            <li><a 
              href="#resultados"
              className={`${
                activeSection === "resultados"
                  ? "text-yellow-700 font-semibold text-[18px] border-b"
                  : "text-gray-700 text-[16px]"
              } hover:text-yellow-700`}
              >
              Resultados
            </a></li>
            <li><a 
              href="#depoimentos" className={`${
                activeSection === "depoimentos"
                  ? "text-yellow-700 font-semibold text-[18px] border-b"
                  : "text-gray-700 text-[16px]"
              } hover:text-yellow-700`}>
              Depoimentos
            </a></li>
            <li><a 
              href="#contato" className={`${
                activeSection === "contato"
                  ? "text-yellow-700 font-semibold text-[18px] border-b"
                  : "text-gray-700 text-[16px]"
              } hover:text-yellow-700`}>
              Contato
            </a></li>
          </ul>
        </nav>
        {/* <button className="text-white px-4 py-2 rounded cursor-pointer bg-yellow-900 max-tab:px-3 max-mob:text-[12px] max-mob:hidden">Agendar Consulta</button> */}
      </header>
    </>
  )
}
