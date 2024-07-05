import Particles from "@/components/magicui/particles.tsx";
import { Header } from "@/components/header.tsx";
import { Hero } from "@/components/hero.tsx";
import { Images } from "@/components/images.tsx";
import { Sponsors } from "@/components/sponsors.tsx";
import { domAnimation, LazyMotion } from "framer-motion";
import { Footer } from "@/components/footer.tsx";
import { Sessions } from "@/components/sessions.tsx";

function App() {
  return (
    <LazyMotion features={domAnimation} strict>
      <Header />
      <Particles
        className="absolute top-0 left-0 w-full h-full"
        quantity={50}
      />
      <Hero />
      <Images />
      <Sessions />
      <Sponsors />
      <Footer />
    </LazyMotion>
  );
}

export default App;
