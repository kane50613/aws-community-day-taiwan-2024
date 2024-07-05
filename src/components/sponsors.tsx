import BlurIn from "@/components/magicui/blur-in.tsx";
import { motion } from "framer-motion";

export const Sponsors = () => (
  <div className="py-14 text-center container max-w-screen-xl mx-auto">
    <BlurIn component={motion.h3} className="text-xl font-medium">
      Sponsors
    </BlurIn>
    <BlurIn
      component={motion.h2}
      className="text-3xl md:text-5xl lg:text-6xl font-display font-bold mb-12"
    >
      We couldn't do it without you
    </BlurIn>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {new Array(8).fill(0).map((_, i) => (
        <BlurIn
          key={i}
          delay={0.05 * i}
          className="rounded-md aspect-video overflow-hidden"
        >
          <img
            key={i}
            src={`https://picsum.photos/seed/sponsors-${i + 1}/720/480`}
            className="object-cover"
            alt="Sponsor"
          />
        </BlurIn>
      ))}
    </div>
  </div>
);
