import { Flex, Slider } from "theme-ui";
import { RangeProps } from "./Range.def";

export const Range: React.FC<RangeProps> = ({
  value,
  onChange,
  color,
  min = 0,
  max = 30,
}) => {
  const bg =
    color === "primary"
      ? `rgb(19, 47, 68, ${(value + 2) / 30})`
      : `rgb(245, 127, 1, ${(value + 2) / 30})`;
  const height = ["120px", "140px", "220px"];
  const width = "12px";
  return (
    <Flex
      sx={{
        position: "relative",
        // overlay: "hidden",
        width: "20px",
        height: height,
        alignItems: "center",
        ml: "28px",
        mt: 2,
      }}
    >
      <Slider
        type="range"
        min={min}
        max={max}
        value={value}
        onChange={onChange}
        sx={{
          bg: bg,
          appearance: "none",
          position: "absolute",
          left: "0",
          bottom: "0",
          width: height,
          height: width,
          color: "black",
          transform: "rotate(-90deg)",
          transformOrigin: "bottom left",
          "&:active": {
            color: "black",
          },
          "&:focus": {
            color: "black",
          },
        }}
      />
    </Flex>
  );
};
