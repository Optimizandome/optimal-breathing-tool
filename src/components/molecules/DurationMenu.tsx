import { Box, Flex, Label, Slider } from "theme-ui";

import { DurationMenuProps } from "./DurationMenu.def";

export const DurationMenu: React.FC<DurationMenuProps> = ({
  duration: { minutes, seconds },
  onDurationChange,
}) => (
  <Flex sx={{ flexDirection: "column" }}>
    <Flex sx={{ alignItems: "center", mb: [2, 3] }}>
      <Box sx={{ width: "200px" }}>
        <Label>
          {minutes} minuto{minutes > 1 ? "s" : ""}
        </Label>
      </Box>
      <Slider
        type="range"
        min={1}
        max={10}
        value={minutes}
        onChange={(val) =>
          onDurationChange("minutes", Number(val.target.value))
        }
        sx={{
          bg: "primary",
          height: "3px",
          color: "black",
          "&:active": {
            color: "black",
          },
          "&:focus": {
            color: "black",
          },
        }}
      />
    </Flex>
    <Flex sx={{ alignItems: "center", my: [2, 3] }}>
      <Box sx={{ width: "200px" }}>
        <Label>{seconds} segundos</Label>
      </Box>
      <Slider
        type="range"
        min={0}
        max={45}
        step={15}
        value={seconds}
        onChange={(val) =>
          onDurationChange("seconds", Number(val.target.value))
        }
        sx={{
          bg: "primary",
          height: "3px",
          color: "black",
          "&:active": {
            color: "black",
          },
          "&:focus": {
            color: "black",
          },
        }}
      />
    </Flex>
  </Flex>
);
