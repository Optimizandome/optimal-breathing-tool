import { Flex, Text } from "theme-ui";
import CD from "react-countdown";

import { CountdownProps } from "./Countdown.def";

export const Countdown: React.FC<CountdownProps> = ({
  initialTime,
  showTotal,
  onComplete,
}) => {
  return (
    <Flex
      sx={{
        width: showTotal ? "70px" : "88px",
        py: 2,
        bg: showTotal ? "secondary" : "primary",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: showTotal ? 4 : 3,
      }}
    >
      <CD
        date={Date.now() + initialTime}
        onComplete={onComplete}
        renderer={({ total, minutes, seconds }) =>
          showTotal ? (
            <Text sx={{ fontSize: 5, color: "white" }}>{total / 1000}</Text>
          ) : (
            <Text
              sx={{
                color: "white",
                textAlign: "center",
                fontSize: 4,
              }}
            >
              {minutes}:{seconds}
            </Text>
          )
        }
      />
    </Flex>
  );
};
