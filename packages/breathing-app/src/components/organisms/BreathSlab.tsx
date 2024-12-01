// @ts-ignore
import { memo } from "react";
import { Box, Button, Flex, Heading } from "theme-ui";

import { Countdown, Timer } from "components/atoms";
import { BreathSlabProps } from "./BreathSlab.def";
import { Breathing, BreathSetItem, TopMenu } from "components/molecules";
import { FIXED_PROTOCOLS } from "constants/config";
import { BreathAnimationToMilliseconds, isBreathSetActive } from "utils";
import { Trans, useTranslation } from "react-i18next";
import { BreathProtocol } from "types";

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
  const { t } = useTranslation();

  const translationMap = {
    balanceado: {
      title: t("balanced"),
      usedTo: [
        t("protocols.balancedUsedTo.1"),
        t("protocols.balancedUsedTo.2"),
        t("protocols.balancedUsedTo.3"),
        t("protocols.balancedUsedTo.4"),
      ],
      indications: [t("protocols.balancedIndications.1")],
    },
    caja: {
      title: t("square"),
      usedTo: [
        t("protocols.squareUsedTo.1"),
        t("protocols.squareUsedTo.2"),
        t("protocols.squareUsedTo.3"),
        t("protocols.squareUsedTo.4"),
      ],
      indications: [
        t("protocols.squareIndications.1"),
        t("protocols.squareIndications.2"),
      ],
    },
    triangulo: {
      title: t("triangle"),
      usedTo: [
        t("protocols.triangleUsedTo.1"),
        t("protocols.triangleUsedTo.2"),
        t("protocols.triangleUsedTo.3"),
      ],
      indications: [
        t("protocols.triangleIndications.1"),
        t("protocols.triangleIndications.2"),
      ],
    },
    triangulo_invertido: {
      title: t("invertedTriangle"),
      usedTo: [
        t("protocols.invertedTriangleUsedTo.1"),
        t("protocols.invertedTriangleUsedTo.2"),
        t("protocols.invertedTriangleUsedTo.3"),
      ],
      indications: [
        t("protocols.invertedTriangleIndications.1"),
        t("protocols.invertedTriangleIndications.2"),
      ],
    },
  };

  const translatedProtocols: any[] = FIXED_PROTOCOLS.map((protocol) => {
    const index = protocol.id as keyof typeof translationMap;
    return {
      ...protocol,
      ...translationMap[index],
    };
  });

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
              fontSize: [4, 5, 6, 7],
              fontWeight: "bold",
              cursor: "pointer",
              color: "white",
            }}
          >
            {t("start")}
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
          width: ["100%", "420px", "470px", "520px"],
          maxWidth: "100%",
          flexDirection: "column",
          alignItems: "center",
          px: [3, 4],
          py: [2, 1],
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
          px: [3, 4],
        }}
      >
        <Heading sx={{ my: [2, 3], fontSize: [4, 5] }}>
          {t("recommendation")}:
        </Heading>
        <Flex sx={{ flexDirection: "column", gap: 3 }}>
          {translatedProtocols.map((breathSet) => (
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
