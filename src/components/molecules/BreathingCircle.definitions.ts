type BreathingState = "inhale_hold" | "inhale" | "exhale" | "exhale_hold";

export type CircletBreathing = {
  breathingState: BreathingState;
  duration: number;
  label: string;
};
export type BreathingCircleProps = {
  breathings: CircletBreathing[];
};
