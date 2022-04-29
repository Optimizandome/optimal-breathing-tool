import { Box, Flex, Label, Switch } from "theme-ui";

import type { IndicatorsMenuProps } from "./IndicatorsMenu.def";

export const IndicatorsMenu: React.FC<IndicatorsMenuProps> = ({
  indicators: { withTimer, withSound, withVibration },
  onToggleIndicator,
}) => (
  <Flex sx={{ width: "100%", flexDirection: "column" }}>
    <Flex
      sx={{
        justifyContent: "space-between",
        alignItems: "center",
        py: [2, 3],
      }}
    >
      <Label sx={{ flex: 1 }}>Contador</Label>
      <Box>
        <Switch
          checked={withTimer}
          onChange={() => onToggleIndicator("withTimer")}
          sx={{
            backgroundColor: "gray",
            "input:checked ~ &": {
              backgroundColor: "secondary",
            },
          }}
        />
      </Box>
    </Flex>
    <Flex
      sx={{
        justifyContent: "space-between",
        alignItems: "center",
        py: [2, 3],
      }}
    >
      <Label sx={{ flex: 1 }}>Sonido</Label>
      <Box>
        <Switch
          checked={withSound}
          onChange={() => onToggleIndicator("withSound")}
          sx={{
            backgroundColor: "gray",
            "input:checked ~ &": {
              backgroundColor: "secondary",
            },
          }}
        />
      </Box>
    </Flex>
    <Flex
      sx={{
        justifyContent: "space-between",
        alignItems: "center",
        py: [2, 3],
      }}
    >
      <Label sx={{ flex: 1 }}>Vibración</Label>
      <Box>
        <Switch
          checked={withVibration}
          onChange={() => onToggleIndicator("withVibration")}
          sx={{
            backgroundColor: "gray",
            "input:checked ~ &": {
              backgroundColor: "secondary",
            },
          }}
        />
      </Box>
    </Flex>
  </Flex>
);
