import { memo } from "react";
import { Button, Flex, Heading } from "theme-ui";

import { Timer } from "components/atoms";
import { BreathSlabProps } from "./BreathSlab.def";
import { Breathing, BreathSetItem, TopMenu } from "components/molecules";
import { PRE_SETS } from "constants/config";
import { BreathAnimationToMilliseconds, isBreathSetActive } from "utils";

const MemoizedBreathing = memo(Breathing);

export const BreathSlab: React.FC<BreathSlabProps> = ({
  breathingState,
  breathings,
  showTimer,
  onTimerCompleted,
  onStart,
  onConfig,
  selectBreathSet,
  onTempoChange,
}) => {
  const currentElement = () => {
    switch (breathingState) {
      case "standBy":
        return (
          <Button
            onClick={onStart}
            sx={{
              size: "60%",
              bg: "primary",
              borderRadius: "50%",
              fontSize: [5, 6, 7, 8],
              fontWeight: "bold",
              cursor: "pointer",
              color: "white",
            }}
          >
            Empezar
          </Button>
        );

      case "countDown":
        return (
          <Flex
            sx={{
              size: "60%",
              borderRadius: "50%",
              bg: "primary",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Timer time={3} onComplete={onTimerCompleted} />
          </Flex>
        );

      case "breathing":
        return (
          <>
            <MemoizedBreathing
              showTimer={showTimer}
              onTempoChange={onTempoChange}
              breathings={BreathAnimationToMilliseconds(breathings)}
            />
          </>
        );

      default:
        return <Flex>state not found</Flex>;
    }
  };

  return (
    <Flex
      sx={{
        size: "100%",
        position: "relative",
        flexDirection: "column",
        justifyContent: "flex-end",
        alignItems: "center",
      }}
    >
      <TopMenu onConfig={onConfig} />
      <Flex
        sx={{
          width: ["100%", "500px", "550px", "600px"],
          maxWidth: "100%",
          px: [3, 4],
          py: 3,
        }}
      >
        <Flex
          sx={{
            width: "100%",
            aspectRatio: "auto 1 / 1",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {currentElement()}
        </Flex>
      </Flex>
      <Flex
        sx={{
          width: 9,
          maxWidth: "100%",
          height: "100%",
          overflow: "auto",
          flexDirection: "column",
          p: [3, 4],
        }}
      >
        <Heading sx={{ my: [3, 4], fontSize: [4, 5] }}>Recomendados:</Heading>
        <Flex sx={{ flexDirection: "column", gap: 3 }}>
          {PRE_SETS.map((breathSet) => (
            <BreathSetItem
              active={isBreathSetActive(breathSet, breathings)}
              onSelect={selectBreathSet}
              key={breathSet.title}
              set={breathSet}
            />
          ))}
        </Flex>
      </Flex>
    </Flex>
  );
};
