import { faRightFromBracket } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Box, Flex, Heading } from "theme-ui";

import { ConfigBarProps } from "./ConfigBar.def";

export const ConfigBar: React.FC<ConfigBarProps> = ({ onClose }) => {
  return (
    <Flex
      sx={{
        py: [3, 4],
        width: "100%",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
      }}
    >
      <Box
        onClick={onClose}
        sx={{
          position: "absolute",
          left: [1, 2, 3],
          p: 2,
          fontSize: [5, 6],
          cursor: "pointer",
          color: "secondary",
        }}
      >
        <FontAwesomeIcon icon={faRightFromBracket} />
      </Box>
      <Heading sx={{ fontSize: [4, 5] }}>Configuración</Heading>
    </Flex>
  );
};
