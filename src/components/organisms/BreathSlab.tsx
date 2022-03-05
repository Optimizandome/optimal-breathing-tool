import { memo } from "react";
import { Button, Flex } from "theme-ui";

import { Timer } from "components/atoms";
import { BreathSlabProps } from "./BreathSlab.def";
import { Breathing } from "components/molecules";

const MemoizedBreathing = memo(Breathing);

export const BreathSlab: React.FC<BreathSlabProps> = ({
  breathingState,
  breathings,
  onTimerCompleted,
  onStart,
}) => {
  const currentElement = () => {
    switch (breathingState) {
      case "standBy":
        return (
          <Flex>
            <Button onClick={onStart}>Start</Button>
          </Flex>
        );

      case "countDown":
        return (
          <Flex>
            <Timer time={3} onComplete={onTimerCompleted} />
          </Flex>
        );

      case "breathing":
        return (
          <Flex>
            <MemoizedBreathing breathings={breathings} />
          </Flex>
        );

      default:
        return <Flex>state not found</Flex>;
    }
  };

  return (
    <Flex>
      <Flex
        sx={{
          p: 3,
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {currentElement()}
      </Flex>
    </Flex>
  );
};
