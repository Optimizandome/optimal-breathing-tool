import { BreathingAnimation } from "types";

export type BreathingProps = {
  breathings: BreathingAnimation[];
  showTimer: boolean;
  onTempoChange?: (index: number) => void;
};
