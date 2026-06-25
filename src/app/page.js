import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Trataments from "@/components/Trataments";
import About from "@/components/About";
import Results from "@/components/Results";
import Depoiments from "@/components/Depoiments";
import Footer from "@/components/Footer";

export default function Home() {
  return (
   <>
    <Header />
    <Hero />
    <About />
    <Trataments />
    <Results />
    <Depoiments />
    <Footer />
   </>
  );
}