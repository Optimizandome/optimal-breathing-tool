import { BreathState } from "store/breathSlice";

export type DurationMenuProps = {
  duration: BreathState["config"]["duration"];
  onDurationChange: (
    duration: keyof BreathState["config"]["duration"],
    time: number
  ) => void;
};
