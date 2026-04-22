import HeroSection from "../components/HeroSection";
import Stack from "../components/Stack";
import ProjetosSection from "../components/Projetos";
import GitBanner from "../components/GitBanner";
import TecBanner from "../components/TecBanner";

export default function HomePage() {
  return (
    <div>
      <HeroSection />
      <TecBanner />
       <GitBanner/>
     <Stack />
           <ProjetosSection />
    </div>
    
  );
}
