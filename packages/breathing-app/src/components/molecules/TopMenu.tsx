import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCogs } from "@fortawesome/free-solid-svg-icons";
import { Flex, Heading, Box, Image } from "theme-ui";
import img4 from "../../assets/images/img4.png";
import { TopMenuProps } from "./TopMenu.def";

export const TopMenu: React.FC<TopMenuProps> = ({ onConfig }) => {
  return (
    <Flex
      sx={{
        width: "100%",
        py: [2, 3],
        px: [1, 2],
        position: "relative",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <Image
        src={img4}
        alt="img1"
        sx={{
          width: ["70px", "90px"],
        }}
      />
      <Heading
        sx={{
          fontSize: [5, 6],
          flex: 1,
          textAlign: "center",
        }}
      >
        Samay
      </Heading>
      <Box sx={{ width: ["70px", "90px"] }}></Box>
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
