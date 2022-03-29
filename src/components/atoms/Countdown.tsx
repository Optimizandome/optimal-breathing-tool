import { Flex, Text } from "theme-ui";
import CD from "react-countdown";

import { CountdownProps } from "./Countdown.def";

export const Countdown: React.FC<CountdownProps> = ({ initialTime }) => {
  return (
    <Flex
      sx={{
        size: "55px",
        bg: "primary",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: "50%",
      }}
    >
      <CD
        date={Date.now() + initialTime}
        renderer={(props) => (
          <Text sx={{ fontSize: 6, color: "white" }}>{props.total / 1000}</Text>
        )}
      />
    </Flex>
  );
};
