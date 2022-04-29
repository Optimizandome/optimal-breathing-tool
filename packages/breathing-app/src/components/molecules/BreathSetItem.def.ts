import { BreathProtocol } from "types";

export type BreathingsItemProps = {
  active: boolean;
  onSelect: (set: BreathProtocol) => void;
  set: BreathProtocol;
};
