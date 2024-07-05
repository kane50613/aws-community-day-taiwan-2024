import { Button } from "@/components/ui/button.tsx";
import { ThemeToggle } from "@/components/theme-toggle.tsx";

export const Header = () => (
  <header className="border-b bg-background">
    <div className="container flex items-center h-full py-2 gap-2">
      <p>AWS CMD</p>
      <div className="flex-grow" />
      <ThemeToggle />
      <Button variant="secondary">Register</Button>
    </div>
  </header>
);
