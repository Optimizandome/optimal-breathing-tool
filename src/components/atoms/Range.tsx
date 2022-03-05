import { Box } from "theme-ui";
import { RangeProps } from "./Range.def";

export const Range: React.FC<RangeProps> = ({ value, onChange }) => (
  <Box>
    <input type="range" min={1} max={30} value={value} onChange={onChange} />
  </Box>
);
