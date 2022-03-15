import { BreathsSet } from "types";

export type BreathingsItemProps = {
  active: boolean;
  onSelect: (set: BreathsSet) => void;
  set: BreathsSet;
};
