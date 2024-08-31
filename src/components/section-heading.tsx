import { m } from "framer-motion";
import { BlurIn } from "@/components/magicui/blur-in.tsx";
import React, { ComponentProps } from "react";
import { cn } from "@/lib/utils.ts";

export const SectionHeading = (props: ComponentProps<"h2">) => (
  <BlurIn
    component={m.h2}
    {...props}
    className={cn(
      "text-3xl md:text-5xl lg:text-6xl font-display font-bold mb-12 py-1.5",
      props.className,
    )}
  />
);
