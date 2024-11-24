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

export const RightSideMenu: React.FC<RightSideMenuProps> = ({
  onClose,
  ...rest
}) => {
  const { t, i18n } = useTranslation();

  const handleChangeLang = (lang: string) => {
    i18n.changeLanguage(lang);
  };

  return (
    <Flex sx={{ size: "100%", flexDirection: "column" }}>
      <ConfigBar onClose={onClose} />
      <BreathingConfig {...rest} />

      <Box sx={{ pb: 3, px: [3, 4] }}>
        <Heading sx={{ mb: 4 }}>{t("duration")}</Heading>
        <DurationMenu {...rest} />
        <Heading sx={{ my: 4 }}>{t("indicators")}</Heading>
        <IndicatorsMenu {...rest} />
        <Heading sx={{ my: 4 }}>{t("language")}</Heading>
        <LangSelector initialLang={i18n.language} onChange={handleChangeLang} />
      </Box>
    </Flex>
  );
};
