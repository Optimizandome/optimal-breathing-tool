import { Box, Flex, Heading, Text } from "theme-ui";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWaveSquare } from "@fortawesome/free-solid-svg-icons";

import { BreathingsPreview } from "components/atoms";
import { BreathingsItemProps } from "./BreathingsItem.def";

export const BreathingsItem: React.FC<BreathingsItemProps> = ({ times }) => {
  return (
    <Flex
      sx={{
        width: "100%",
        height: "66px",
        bg: "white",
        borderRadius: 2,
        alignItems: "center",
        px: 3,
        py: 3,
        userSelect: "none",
        cursor: "pointer",
      }}
    >
      <Box
        sx={{
          size: "36px",
          bg: "secondary",
          color: "white",
          borderRadius: "6px",
          fontSize: 5,
          textAlign: "center",
          pt: 1,
        }}
      >
        <FontAwesomeIcon icon={faWaveSquare} />
      </Box>
      <Flex sx={{ flexDirection: "column", flex: 1, px: 3 }}>
        <Heading as="h4" sx={{ fontSize: 4, lineHeight: 2 }}>
          Square
        </Heading>
        <Text sx={{ fontSize: 2, lineHeight: 0, color: "gray" }}>
          Lorem Ipsum is simply dummy text of the printing{" "}
        </Text>
      </Flex>
      <BreathingsPreview times={times} />
    </Flex>
  );
};
