import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ChiSiamo from "@/components/sections/ChiSiamo";
import Servizi from "@/components/sections/Servizi";
import Metodo from "@/components/sections/Metodo";
import Contatti from "@/components/sections/Contatti";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <ChiSiamo />
        <Servizi />
        <Metodo />
        <Contatti />
      </main>
      <Footer />
    </>
  );
}
