import { Box, Flex, Heading } from "theme-ui";

import {
  BreathingConfig,
  ConfigBar,
  DurationMenu,
  IndicatorsMenu,
} from "components/molecules";
import { RightSideMenuProps } from "./RightSideMenu.def";

export const RightSideMenu: React.FC<RightSideMenuProps> = ({
  onClose,
  ...rest
}) => {
  return (
    <Flex sx={{ size: "100%", flexDirection: "column" }}>
      <ConfigBar onClose={onClose} />
      <BreathingConfig {...rest} />

      <Box sx={{ pb: 3, px: [3, 4] }}>
        <Heading sx={{ mb: 4 }}>Duración</Heading>
        <DurationMenu {...rest} />
        <Heading sx={{ my: 4 }}>Indicadores</Heading>
        <IndicatorsMenu {...rest} />
      </Box>
    </Flex>
  );
};
