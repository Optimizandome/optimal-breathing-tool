type BreathingState = "inhale_hold" | "inhale" | "exhale" | "exhale_hold";

export type BreathingAnimation = {
  breathingState: BreathingState;
  duration: number;
  label: string;
  color: string;
};

export type BreathProtocol = {
  id: string;
  title: string;
  image: any;
  text: string;
  usedTo: string[];
  indications: string[];
  breaths: [number, number, number, number];
};
