import { Box, Flex, Label, Switch } from "theme-ui";
import { useTranslation } from "react-i18next";

import type { IndicatorsMenuProps } from "./IndicatorsMenu.def";

export const IndicatorsMenu: React.FC<IndicatorsMenuProps> = ({
  indicators: { withTimer, withSound, withVibration },
  onToggleIndicator,
}) => {
  const { t } = useTranslation();
  return (
    <Flex sx={{ width: "100%", flexDirection: "column" }}>
      <Flex
        sx={{
          justifyContent: "space-between",
          alignItems: "center",
          py: [1, 2],
        }}
      >
        <Label sx={{ flex: 1 }}>{t("counter")}</Label>
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
        <Label sx={{ flex: 1 }}>{t("sound")}</Label>
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
          py: [1, 2],
        }}
      >
        <Label sx={{ flex: 1 }}>{t("vibration")}</Label>
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
};
