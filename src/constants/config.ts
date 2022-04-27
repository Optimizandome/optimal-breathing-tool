import { BreathProtocol } from "types";

export const FIXED_PROTOCOLS: BreathProtocol[] = [
  {
    id: "default",
    title: "Default",
    text: "Default Breathing",
    breaths: [4, 0, 6, 4],
  },
  {
    id: "square",
    title: "Square",
    text: "Square Breathing",
    breaths: [4, 4, 4, 4],
  },
  {
    id: "pranayama",
    title: "Pranayama",
    text: "Pranayama Breathing",
    breaths: [7, 4, 8, 0],
  },
  {
    id: "ujjayi",
    title: "Ujjayi",
    text: "Ujjayi Breathing",
    breaths: [7, 0, 7, 0],
  },
];
