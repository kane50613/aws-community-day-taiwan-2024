import { Button } from "@/components/ui/button.tsx";
import { ThemeToggle } from "@/components/theme-toggle.tsx";
import BlurIn from "@/components/magicui/blur-in.tsx";
import { motion } from "framer-motion";

export const Header = () => (
  <BlurIn
    component={motion.header}
    className="border-b bg-background sticky top-0 z-50"
    delay={0.3}
  >
    <div className="container flex items-center h-full py-2 gap-2">
      <p>AWS CMD</p>
      <div className="flex-grow" />
      <ThemeToggle />
      <Button variant="secondary">Register</Button>
    </div>
  </BlurIn>
);
