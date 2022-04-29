import { BreathingAnimation } from "types";

export type BreathingConfigProps = {
  currentBreathings: [
    BreathingAnimation,
    BreathingAnimation,
    BreathingAnimation,
    BreathingAnimation
  ];
  onUpdateBreathing?: (duration: number, index: number) => void;
};
