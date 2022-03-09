import { faCog } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Flex, Heading, Box } from "theme-ui";

import { TopMenuProps } from "./TopMenu.def";

export const TopMenu: React.FC<TopMenuProps> = ({ onConfig }) => {
  return (
    <Flex
      sx={{
        height: [4, 5],
        width: "100%",
        position: "relative",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Heading sx={{ fontSize: [5, 6] }}>Optimal Breathing</Heading>
      <Box
        onClick={onConfig}
        sx={{
          position: "absolute",
          right: [1, 2, 3],
          p: 2,
          fontSize: [5, 6],
          cursor: "pointer",
          color: "secondary",
        }}
      >
        <FontAwesomeIcon icon={faCog} />
      </Box>
    </Flex>
  );
};
