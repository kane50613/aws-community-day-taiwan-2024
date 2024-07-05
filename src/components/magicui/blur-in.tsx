"use client";

import { m, MotionProps } from "framer-motion";

import { createElement, FC, PropsWithChildren } from "react";

interface BlurIntProps extends PropsWithChildren {
  // a motion component function
  component?: FC<MotionProps>;
  className?: string;
  variant?: {
    hidden: { filter: string; opacity: number };
    visible: { filter: string; opacity: number };
  };
  delay?: number;
  duration?: number;
}

export const BlurIn = ({
  children,
  component,
  className,
  variant,
  duration = 1,
  delay = 0,
}: BlurIntProps) => {
  const defaultVariants = {
    hidden: { filter: "blur(10px)", opacity: 0 },
    visible: { filter: "blur(0px)", opacity: 1 },
  };
  const combinedVariants = variant || defaultVariants;

  return createElement(component || m.div, {
    initial: "hidden",
    whileInView: "visible",
    viewport: { once: true },
    transition: { duration, delay },
    variants: combinedVariants,
    className,
    children,
  });
};
