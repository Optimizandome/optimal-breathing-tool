import { TextProps } from "theme-ui";

export type TimerProps = TextProps & {
  time: number;
  onComplete: () => void;
};
