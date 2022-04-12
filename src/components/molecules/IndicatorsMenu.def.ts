import { BreathState } from "store/breathSlice";

export type IndicatorsMenuProps = {
  indicators: BreathState["config"]["indicators"];
  onToggleIndicator: (
    indicator: keyof BreathState["config"]["indicators"]
  ) => void;
};
