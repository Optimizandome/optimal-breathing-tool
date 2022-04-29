import { BreathingConfigProps } from "components/molecules/BreathingConfig.def";
import { DurationMenuProps } from "components/molecules/DurationMenu.def";
import { IndicatorsMenuProps } from "components/molecules/IndicatorsMenu.def";

export type RightSideMenuProps = {
  onClose: () => void;
} & BreathingConfigProps &
  IndicatorsMenuProps &
  DurationMenuProps;
