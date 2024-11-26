import { Box, Flex, Heading } from "theme-ui";

import {
  BreathingConfig,
  ConfigBar,
  DurationMenu,
  IndicatorsMenu,
  LangSelector,
} from "components/molecules";
import { RightSideMenuProps } from "./RightSideMenu.def";
import { useTranslation } from "react-i18next";
import { useDispatch } from "react-redux";
import { updateBreathingsLabels } from "store";

export const RightSideMenu: React.FC<RightSideMenuProps> = ({
  onClose,
  ...rest
}) => {
  const { t, i18n } = useTranslation();

  const dispatch = useDispatch();

  const handleChangeLang = async (lang: string) => {
    i18n.changeLanguage(lang);
    const labels = [t("inhale"), t("hold"), t("exhale"), t("hold")];

    dispatch(updateBreathingsLabels(labels));
  };

  return (
    <Flex
      sx={{
        size: "100%",
        flexDirection: "column",
        overflowY: "auto",
        pb: 2,
        m: 0,
      }}
    >
      <ConfigBar onClose={onClose} />
      <BreathingConfig {...rest} />
      <Box sx={{ px: [3, 4] }}>
        <Heading sx={{ mb: 3 }}>{t("duration")}</Heading>
        <DurationMenu {...rest} />
        <Heading sx={{ my: 3 }}>{t("indicators")}</Heading>
        <IndicatorsMenu {...rest} />
        <Heading sx={{ my: 3 }}>{t("language")}</Heading>
        <LangSelector initialLang={i18n.language} onChange={handleChangeLang} />
      </Box>
    </Flex>
  );
};
