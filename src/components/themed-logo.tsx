"use client";

import Image from "next/image";
import { useMountedTheme } from "@/lib/use-mounted-theme.ts";

export const ThemedLogo = () => {
  const { theme, mounted } = useMountedTheme();

  return (
    <Image
      src={mounted && theme === "light" ? "/logo-black.svg" : "/logo-white.svg"}
      alt="AWS Community Day 2024"
      width={1068}
      height={390}
      className="h-8 md:h-12 w-auto"
    />
  );
};
