import { Flex } from "theme-ui";

import { BreathingConfig, ConfigBar } from "components/molecules";
import { RightSideMenuProps } from "./RightSideMenu.def";

export const RightSideMenu: React.FC<RightSideMenuProps> = ({
  onClose,
  ...breathingConfigProps
}) => {
  return (
    <Flex sx={{ size: "100%", flexDirection: "column" }}>
      <ConfigBar onClose={onClose} />
      <BreathingConfig {...breathingConfigProps} />
    </Flex>
  );
};
