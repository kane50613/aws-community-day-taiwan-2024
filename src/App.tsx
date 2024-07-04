import BlurIn from "@/components/magicui/blur-in.tsx";
import { motion } from "framer-motion";
import AnimatedShinyText from "@/components/magicui/animated-shiny-text.tsx";
import { cn } from "@/lib/utils.ts";
import { ArrowRightIcon } from "lucide-react";
import { Button } from "@/components/ui/button.tsx";
import Particles from "@/components/magicui/particles.tsx";
import Marquee from "@/components/magicui/marquee.tsx";
import { Header } from "@/components/header.tsx";

function App() {
  return (
    <div>
      <Header />
      <Particles
        className="absolute top-0 left-0 w-full h-full"
        quantity={25}
      />
      <div className="container mt-16 md:mt-32 flex items-center justify-center flex-col">
        <BlurIn delay={0.5}>
          <div
            className={cn(
              "group rounded-full border border-black/5 bg-neutral-100 text-base text-white transition-all ease-in hover:cursor-pointer hover:bg-neutral-200 dark:border-white/5 dark:bg-neutral-900 dark:hover:bg-neutral-800",
            )}
          >
            <AnimatedShinyText className="inline-flex items-center justify-center px-4 py-1 transition ease-out hover:text-neutral-600 hover:duration-300 hover:dark:text-neutral-400">
              🚀 Seeking sponsors for our event
              <ArrowRightIcon className="ml-1 size-3 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" />
            </AnimatedShinyText>
          </div>
        </BlurIn>
        <BlurIn className="font-medium font-display text-center text-balance text-4xl tracking-[-0.02em] drop-shadow-sm md:text-7xl lg:text-8xl md:leading-[5rem] py-6">
          AWS Community Day Summer in Nangang!
        </BlurIn>
        <BlurIn
          component={motion.span}
          delay={0.25}
          className="text-lg md:text-xl text-foreground/75 text-center mb-12"
        >
          Connect with AWS experts and peers. Learn, share, and innovate
          together in Nangang this summer.
        </BlurIn>
        <BlurIn delay={0.75}>
          <Button>
            Register Now
            <ArrowRightIcon className="w-4 ml-2" />
          </Button>
        </BlurIn>
      </div>
      <Marquee className="mt-16 md:mt-32 w-full">
        {new Array(5).fill(0).map((_, i) => (
          <div key={i} className="rounded-lg aspect-video overflow-hidden w-96">
            <img
              key={i}
              src="https://placehold.co/720x480"
              className="object-cover"
              alt="Image"
            />
          </div>
        ))}
      </Marquee>
    </div>
  );
}

export default App;
