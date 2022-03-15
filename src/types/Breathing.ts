type BreathingState = "inhale_hold" | "inhale" | "exhale" | "exhale_hold";

export type BreathingAnimation = {
  breathingState: BreathingState;
  duration: number;
  label: string;
  color: string;
};

export type BreathsSet = {
  title: string;
  text: string;
  breaths: [number, number, number, number];
};
