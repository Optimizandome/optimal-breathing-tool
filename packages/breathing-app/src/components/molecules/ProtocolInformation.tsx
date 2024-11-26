import {
  Flex,
  Box,
  Heading,
  Text,
  Image,
  ThemeProvider,
  Theme,
} from "theme-ui";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useTranslation } from "react-i18next";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

import { PRotocolInfoProps } from "./ProtocolInformation.def";
import { theme } from "styles";

export const ProtocolInformation: React.FC<PRotocolInfoProps> = ({
  protocol,
  onClose,
}) => {
  const { t } = useTranslation();
  return (
    <ThemeProvider theme={theme as Theme}>
      <Flex
        sx={{
          flexDirection: "column",
          bg: "background",
          p: 4,
          borderRadius: 3,
          position: "relative",
        }}
      >
        <Box
          onClick={onClose}
          sx={{
            size: 3,
            position: "absolute",
            right: 3,
            top: 3,
            p: 1,
            textAlign: "center",
            cursor: "pointer",
          }}
        >
          <FontAwesomeIcon icon={faXmark} size="lg" />
        </Box>
        <Heading sx={{ fontSize: 6, textAlign: "center", mb: 3 }}>
          {protocol.title}
        </Heading>
        <Image
          src={protocol.image}
          alt={protocol.title}
          sx={{ size: [6], margin: "0 auto" }}
        />
        <Text>Tempo: {protocol.breaths.map((t) => t / 4).join(":")}</Text>
        <Text sx={{ my: 3, fontWeight: "bold" }}>{t("protocols.usedTo")}:</Text>
        <Flex sx={{ flexDirection: "column" }} as="ul">
          {protocol.usedTo.map((usedTo) => (
            <Text key={usedTo} as="li">
              {usedTo}
            </Text>
          ))}
        </Flex>
        <Text sx={{ my: 3, fontWeight: "bold" }}>{t("indications")}:</Text>
        <Flex sx={{ flexDirection: "column", mb: 2 }} as="ul">
          {protocol.indications.map((indication) => (
            <Text key={indication} as="li">
              {indication}
            </Text>
          ))}
        </Flex>
      </Flex>
    </ThemeProvider>
  );
};
