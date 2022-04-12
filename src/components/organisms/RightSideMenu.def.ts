import { BreathingConfigProps } from "components/molecules/BreathingConfig.def";
import { IndicatorsMenuProps } from "components/molecules/IndicatorsMenu.def";

export type RightSideMenuProps = {
  onClose: () => void;
} & BreathingConfigProps &
  IndicatorsMenuProps;
