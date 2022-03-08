import { Box, Flex, Heading, Text } from "theme-ui";
import { breathingToSeconds } from "utils";

import { Range } from "../atoms/Range";
import { BreathingConfigProps } from "./BreathingConfig.def";

const configArr = [
  { label: "Inhale", min: 1, color: "secondary" },
  { label: "Hold", min: 0, color: "primary" },
  { label: "Exhale", min: 1, color: "secondary" },
  { label: "Hold", min: 0, color: "primary" },
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
            value={breathingToSeconds(currentBreathings[index])}
            onChange={(e) => {
              onUpdateBreathing?.(index, Number(e.target.value));
            }}
          />
          <Box>
            <Heading as="h3">{config.label}</Heading>
            <Text sx={{ color: "gray", fontSize: 2 }}>
              {breathingToSeconds(currentBreathings[index])} seg
            </Text>
          </Box>
        </Flex>
      ))}
    </Flex>
  );
};
