// @ts-ignore
import { memo } from "react";
import { Box, Button, Flex, Heading } from "theme-ui";

import { Countdown, Timer } from "components/atoms";
import { BreathSlabProps } from "./BreathSlab.def";
import { Breathing, BreathSetItem, TopMenu } from "components/molecules";
import { FIXED_PROTOCOLS } from "constants/config";
import { BreathAnimationToMilliseconds, isBreathSetActive } from "utils";
import { Trans, useTranslation } from "react-i18next";

const MemoizedBreathing = memo(Breathing);
const MemoizedCountdown = memo(Countdown);

export const BreathSlab: React.FC<BreathSlabProps> = ({
  breathingState,
  breathings,
  showTimer,
  practiceDuration,
  onCompletePractice,
  onTimerCompleted,
  onStart,
  onConfig,
  selectBreathSet,
  onTempoChange,
  onShowInformation,
}) => {
  const { t, i18n } = useTranslation();

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
            <Trans i18nKey="start" />
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
          position: "relative",
          width: ["100%", "500px", "550px", "600px"],
          maxWidth: "100%",
          flexDirection: "column",
          alignItems: "center",
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
          {breathingState === "breathing" && (
            <Box sx={{ position: "absolute", bottom: "2px" }}>
              <MemoizedCountdown
                initialTime={practiceDuration * 1000}
                onComplete={onCompletePractice}
              />
            </Box>
          )}
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
        <Heading sx={{ my: [3, 4], fontSize: [4, 5] }}>
          {t("recommendation")}:
        </Heading>
        <Flex sx={{ flexDirection: "column", gap: 3 }}>
          {FIXED_PROTOCOLS.map((breathSet) => (
            <BreathSetItem
              onShowInformation={onShowInformation}
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
