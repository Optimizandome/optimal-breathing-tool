import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCogs } from "@fortawesome/free-solid-svg-icons";
import { Flex, Heading, Box } from "theme-ui";

import { TopMenuProps } from "./TopMenu.def";

export const TopMenu: React.FC<TopMenuProps> = ({ onConfig }) => {
  return (
    <Flex
      sx={{
        width: "100%",
        py: [3, 4],
        position: "relative",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Heading sx={{ fontSize: [5, 6] }}>Samay</Heading>
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
        <FontAwesomeIcon icon={faCogs} />
      </Box>
    </Flex>
  );
};
