import { Text } from "theme-ui";

import { useTimer } from "utils/hooks";
import { TimerProps } from "./Timer.def";

export const Timer: React.FC<TimerProps> = ({ time, onComplete, ...rest }) => {
  const { count } = useTimer(time, onComplete);
  return (
    <Text sx={{ fontSize: 9, fontWeight: "bold", color: "white" }} {...rest}>
      {count}
    </Text>
  );
};
