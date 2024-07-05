import { Button } from "@/components/ui/button.tsx";
import { ThemeToggle } from "@/components/theme-toggle.tsx";
import BlurIn from "@/components/magicui/blur-in.tsx";
import { m } from "framer-motion";
import { i18next } from "@/lib/i18n.ts";

export const Header = () => (
  <BlurIn
    component={m.header}
    className="border-b bg-background sticky top-0 z-50"
    delay={0.3}
  >
    <div className="container flex items-center h-full py-2 gap-2">
      <p>AWS CMD</p>
      <div className="flex-grow" />
      <ThemeToggle />
      <Button variant="secondary">{i18next.t("header:register")}</Button>
    </div>
  </BlurIn>
);
