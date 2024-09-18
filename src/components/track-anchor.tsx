"use client";

import { ComponentProps } from "react";

export const TrackAnchor = ({
  track,
  ...props
}: { track: string } & ComponentProps<"a">) => (
  <a
    onClick={() => {
      if (process.env.NODE_ENV !== "production")
        return console.info(`Track ${track} clicked`);

      if (!("dadk" in window) || typeof window.dadk !== "function")
        return console.error("dadk is not defined");

      window.dadk("track", track);
    }}
    {...props}
  />
);
