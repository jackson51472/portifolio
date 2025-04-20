
import Footer from "@/components/footer/footer";
import Header from "@/components/header/header";
import Projetos from "@/components/projetos/Projetos";
import SobreMim from "@/components/sobre_mim/sobre_mim";

export default function Home() {
  return (
    <>
      <Header />
      <SobreMim />
      <Projetos />
      <Footer />
    </>
  );
}
