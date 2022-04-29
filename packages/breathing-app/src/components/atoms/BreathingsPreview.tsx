import { Flex, Box } from "theme-ui";

import { BreathingsPreviewProps } from "./BreathingsPreview.def";

const buildBarsHeight = (times: BreathingsPreviewProps["times"]) => {
  const totalTime = times.reduce((acc, time) => acc + time, 0);
  return times.map((time) => `${(((time + 0.1) * 1.5) / totalTime) * 100}%`); //  to make it look better
};

export const BreathingsPreview: React.FC<BreathingsPreviewProps> = ({
  times,
}) => {
  return (
    <Flex
      sx={{
        height: "100%",
        width: "fit-content",
        alignItems: "flex-end",
        gap: 1,
      }}
    >
      {buildBarsHeight(times).map((height, index) => {
        return <Box key={index} sx={{ width: [0, 1], height, bg: "muted" }} />;
      })}
    </Flex>
  );
};
