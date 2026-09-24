"use client";

import { MeshGradient } from "@paper-design/shaders-react";
import { useSyncExternalStore } from "react";

const MESH_COLORS = ["#1d0773", "#4b0af5", "#c4b5ff", "#3508c2", "#8259ff"];

const reducedMotionQuery = "(prefers-reduced-motion: reduce)";

const subscribe = (onChange: () => void) => {
  const media = window.matchMedia(reducedMotionQuery);
  media.addEventListener("change", onChange);
  return () => media.removeEventListener("change", onChange);
};

export const Mesh = () => {
  const prefersReducedMotion = useSyncExternalStore(
    subscribe,
    () => window.matchMedia(reducedMotionQuery).matches,
    () => true
  );

  return (
    <MeshGradient
      aria-hidden
      className="pointer-events-none absolute inset-0"
      colors={MESH_COLORS}
      distortion={0.8}
      swirl={0}
      grainOverlay={0.12}
      speed={prefersReducedMotion ? 0 : 0.2}
      minPixelRatio={1}
      maxPixelCount={1280 * 800}
    />
  );
};
