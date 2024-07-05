"use client";

import { domAnimation, LazyMotion } from "framer-motion";
import { ReactNode } from "react";

export const MotionLoader = ({ children }: { children: ReactNode }) => (
  <LazyMotion features={domAnimation} strict>
    {children}
  </LazyMotion>
);
