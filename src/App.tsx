import BlurIn from "@/components/magicui/blur-in.tsx";
import Particles from "@/components/magicui/particles.tsx";
import Marquee from "@/components/magicui/marquee.tsx";
import { Header } from "@/components/header.tsx";
import { FadeText } from "@/components/magicui/fade-text.tsx";
import { Hero } from "@/components/hero.tsx";

function App() {
  return (
    <div>
      <BlurIn delay={0.3} className="sticky top-0 z-50">
        <Header />
      </BlurIn>
      <Particles
        className="absolute top-0 left-0 w-full h-full"
        quantity={25}
      />
      <Hero />
      <FadeText direction="up">
        <Marquee className="mt-16 md:mt-32 w-full">
          {new Array(5).fill(0).map((_, i) => (
            <div
              key={i}
              className="rounded-md aspect-video overflow-hidden w-96"
            >
              <img
                key={i}
                src={`https://picsum.photos/seed/${i + 1}/720/480`}
                className="object-cover"
                alt="Image"
              />
            </div>
          ))}
        </Marquee>
      </FadeText>
    </div>
  );
}

export default App;
