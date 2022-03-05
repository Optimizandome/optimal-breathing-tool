type BreathingState = "inhale_hold" | "inhale" | "exhale" | "exhale_hold";

export type BreathingAnimation = {
  breathingState: BreathingState;
  duration: number;
  label: string;
  color: string;
};
