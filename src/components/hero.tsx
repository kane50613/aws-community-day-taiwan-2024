import BlurIn from "@/components/magicui/blur-in.tsx";
import { cn } from "@/lib/utils.ts";
import AnimatedShinyText from "@/components/magicui/animated-shiny-text.tsx";
import { ArrowRightIcon } from "lucide-react";
import { m } from "framer-motion";
import { Button } from "@/components/ui/button.tsx";
import { useTheme } from "@/hooks/use-theme.tsx";

export const Hero = () => {
  const [theme] = useTheme();

  return (
    <div className="container mt-16 md:mt-32 flex items-center justify-center flex-col">
      <div
        className={cn(
          "bg-gradient-to-b from-transparent to-transparent absolute top-0 left-0 w-full h-full opacity-50 via-70%",
          theme === "dark" ? "via-[#613b95]" : "via-[#FF9900]",
        )}
      />
      <BlurIn delay={0.3}>
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
      <BlurIn
        component={m.h1}
        className="font-medium font-display text-center text-balance text-4xl tracking-[-0.02em] drop-shadow-sm md:text-7xl lg:text-8xl md:leading-[5rem] py-6"
      >
        The Community Event for AWS Builders
      </BlurIn>
      <BlurIn
        component={m.span}
        delay={0.15}
        className="text-lg md:text-xl text-foreground/75 text-center mb-12 text-balance"
      >
        Connect with AWS experts and peers. Learn, share, and innovate together.
      </BlurIn>
      <BlurIn delay={0.45}>
        <Button className="rounded-full px-6">
          Register Now
          <ArrowRightIcon className="w-4 ml-2" />
        </Button>
      </BlurIn>
    </div>
  );
};
