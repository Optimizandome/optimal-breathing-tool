import { Box, Flex, Heading, Text } from "theme-ui";

import { Range } from "../atoms/Range";
import { BreathingConfigProps } from "./BreathingConfig.def";
import i18n from "../../utils/i18n";

const configArr = [
  { label: i18n().t("inhale"), min: 1, color: "secondary" },
  { label: i18n().t("hold"), min: 0, color: "primary" },
  { label: i18n().t("exhale"), min: 1, color: "secondary" },
  { label: i18n().t("hold"), min: 0, color: "primary" },
] as const;

export const BreathingConfig: React.FC<BreathingConfigProps> = ({
  currentBreathings,
  onUpdateBreathing,
}) => {
  return (
    <Flex sx={{ p: 4, gap: 2, textAlign: "center" }}>
      {configArr.map((config, index) => (
        <Flex
          key={index}
          sx={{
            flexDirection: "column",
            alignItems: "center",
            p: 1,
            width: "110px",
          }}
        >
          <Range
            color={config.color}
            min={config.min}
            value={currentBreathings[index].duration}
            onChange={(e) => {
              onUpdateBreathing?.(index, Number(e.target.value));
            }}
          />
          <Box>
            <Heading as="h3" sx={{ fontSize: [3, 4] }}>
              {config.label}
            </Heading>
            <Text sx={{ color: "gray", fontSize: 2 }}>
              {currentBreathings[index].duration} segs
            </Text>
          </Box>
        </Flex>
      ))}
    </Flex>
  );
};
