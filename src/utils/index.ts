import { BreathingAnimation } from "types";

export const breathingToSeconds = (breathing: BreathingAnimation): number =>
  breathing.duration / 1000;
