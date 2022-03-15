import { BreathingAnimation, BreathsSet } from "types";

export type BreathState = "countDown" | "breathing" | "standBy";

export type BreathSlabProps = {
  breathingState: BreathState;
  breathings: BreathingAnimation[];
  onTimerCompleted: () => void;
  onStart: () => void;
  onConfig: () => void;
  selectBreathSet: (set: BreathsSet) => void;
};
