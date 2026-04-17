import HeroSection from "../components/HeroSection";
import FormacaoSection from "../components/FormaçãoSection";
import ProjetosSection from "../components/ProjetosSection";
import ContatoSection from "../components/ContatoSection";
import TecBanner from "../components/TecBanner";

export default function HomePage() {
  return (
    <div>
      <HeroSection />
      <TecBanner />
      <FormacaoSection />
    </div>
    
  );
}
