import { useSelector } from "react-redux";
import { Flex, get } from "theme-ui";

import { BreathingControl, BreathingFeed } from "containers";
import { RootState } from "store";

// const desktopColumnTemplate = "1fr 500px";

export const OptimalBreathing: React.FC = () => {
  const isRightMenuOpen = useSelector(
    (state: RootState) => state.layout.isRightMenuOpen
  );

  return (
    <Flex
      sx={{
        width: "100vw",
        height: "100vh",
        position: "relative",
        overflow: "hidden",
        //gridTemplateColumns: desktopColumnTemplate,
      }}
    >
      <Flex
        sx={(theme) => {
          return {
            width: [
              `calc(100% + ${get(theme, "sizes.6")}px)`,
              `calc(100% + ${get(theme, "sizes.7")}px)`,
              `calc(100% + ${get(theme, "sizes.8")}px)`,
            ],
            height: "100%",
            position: "absolute",
            transform: [
              `translateX(-${isRightMenuOpen ? get(theme, "sizes.6") : 0}px)`,
              `translateX(-${isRightMenuOpen ? get(theme, "sizes.7") : 0}px)`,
              `translateX(-${isRightMenuOpen ? get(theme, "sizes.8") : 0}px)`,
            ],
            transition: "transform .2s ease",
          };
        }}
      >
        <Flex
          sx={{
            width: "100vw",
            height: "100%",
            flexDirection: "column",
            p: 2,
          }}
        >
          <BreathingFeed />
        </Flex>
        <Flex sx={{ width: [6, 7, 8], height: "100%", bg: "white", p: 2 }}>
          <BreathingControl />
        </Flex>
      </Flex>
    </Flex>
  );
};
