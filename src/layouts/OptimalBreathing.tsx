import { Flex, Grid } from "theme-ui";

import { BreathingControl, BreathingFeed } from "containers";

const desktopColumnTemplate = "1fr 370px";

export const OptimalBreathing: React.FC = () => (
  <Grid
    sx={{
      width: "100vw",
      height: "100vh",
      gridTemplateColumns: desktopColumnTemplate,
    }}
  >
    <Flex
      sx={{
        width: "100%",
        height: "100%",
        bg: "background",
        flexDirection: "column",
        p: 2,
      }}
    >
      <BreathingFeed />
    </Flex>
    <Flex
      sx={{
        width: "100%",
        height: "100%",
        bg: "white",
        flexDirection: "column",
        p: 2,
      }}
    >
      <BreathingControl />
    </Flex>
  </Grid>
);
