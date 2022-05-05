import { BreathingAnimation, BreathProtocol } from "types";

export type BreathState = "countDown" | "breathing" | "standBy";

export type BreathSlabProps = {
  breathingState: BreathState;
  breathings: BreathingAnimation[];
  showTimer: boolean;
  practiceDuration: number;
  onCompletePractice: () => void;
  onTimerCompleted: () => void;
  onStart: () => void;
  onConfig: () => void;
  selectBreathSet: (set: BreathProtocol) => void;
  onTempoChange: (index: number) => void;
  onShowInformation: (set: BreathProtocol) => void;
};
