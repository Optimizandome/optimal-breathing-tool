import { Box, Flex } from "theme-ui";
import { breathingToSeconds } from "utils";

import { Range } from "../atoms/Range";
import { BreathingConfigProps } from "./BreathingConfig.def";

export const BreathingConfig: React.FC<BreathingConfigProps> = ({
  currentBreathings,
  onUpdateBreathing,
}) => {
  return (
    <Flex sx={{ p: 4, flexDirection: "column", gap: 3 }}>
      <Box>
        inhale {breathingToSeconds(currentBreathings[0])} seconds
        <Range
          value={breathingToSeconds(currentBreathings[0])}
          onChange={(e) => {
            onUpdateBreathing?.(0, Number(e.target.value));
          }}
        />
      </Box>
      <Box>
        hold {breathingToSeconds(currentBreathings[1])} seconds
        <Range
          value={breathingToSeconds(currentBreathings[1])}
          onChange={(e) => {
            onUpdateBreathing?.(1, Number(e.target.value));
          }}
        />
      </Box>
      <Box>
        exhale {breathingToSeconds(currentBreathings[2])} seconds
        <Range
          value={breathingToSeconds(currentBreathings[2])}
          onChange={(e) => {
            onUpdateBreathing?.(2, Number(e.target.value));
          }}
        />
      </Box>
      <Box>
        hold {breathingToSeconds(currentBreathings[3])} seconds
        <Range
          value={breathingToSeconds(currentBreathings[3])}
          onChange={(e) => {
            onUpdateBreathing?.(3, Number(e.target.value));
          }}
        />
      </Box>
    </Flex>
  );
};
