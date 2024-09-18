import { BlurIn } from "@/components/magicui/blur-in.tsx";
import React, { ComponentProps } from "react";
import { cn } from "@/lib/utils.ts";

export const SectionTitle = (props: ComponentProps<"span">) => (
  <BlurIn
    component="span"
    {...props}
    className={cn(
      "text-lg font-medium md:text-xl text-primary/75 max-w-screen-xl",
      props.className
    )}
  />
);
