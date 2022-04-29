import { Box, Flex, Heading, Text } from "theme-ui";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWaveSquare } from "@fortawesome/free-solid-svg-icons";

import { BreathingsPreview } from "components/atoms";
import { BreathingsItemProps } from "./BreathSetItem.def";

const breathingsTimes = (breaths: [number, number, number, number]) =>
  breaths.map((b) => `${b}`).join("-");

export const BreathSetItem: React.FC<BreathingsItemProps> = ({
  active,
  onSelect,
  set,
}) => {
  return (
    <Flex
      onClick={() => onSelect(set)}
      sx={{
        width: "100%",
        height: ["60px", "66px"],
        bg: active ? "white" : "background",
        border: active ? "none" : "1px solid",
        opacity: active ? 1 : 0.8,
        borderColor: "muted",
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
        <Heading as="h4" sx={{ fontSize: [3, 4], lineHeight: 2 }}>
          {set.title}
        </Heading>
        <Text sx={{ fontSize: [1, 2], lineHeight: 0, color: "gray" }}>
          Tempo: {breathingsTimes(set.breaths)}
        </Text>
      </Flex>
      <BreathingsPreview times={set.breaths} />
    </Flex>
  );
};
