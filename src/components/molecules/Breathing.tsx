import { useState, useEffect } from "react";
import { animated, useSpring } from "react-spring";
import { Box, Flex, Text } from "theme-ui";

import { BreathingProps, BreathingAnimation } from "./Breathing.def";

const extractDelayAndDuration = ({
  breathingState,
  duration,
}: BreathingAnimation): any => {
  switch (breathingState) {
    case "inhale":
      return {
        config: {
          duration: duration,
        },
        from: {
          transform: "scale(0.5)",
          color: "#313131",
          x: 1,
        },
        to: {
          transform: "scale(1)",
          color: "#323232",
          x: 1,
        },
      };
    case "inhale_hold":
      return {
        config: {
          duration: duration,
        },
        from: {
          transform: "scale(1)",
          color: "#323232",
          x: 0.7,
        },
        to: {
          transform: "scale(1)",
          color: "#313131",
          x: 1,
        },
      };
    case "exhale":
      return {
        config: {
          duration: duration,
        },
        from: {
          color: "#313131",
          transform: "scale(1)",
          x: 0.7,
        },
        to: {
          transform: "scale(0.5)",
          color: "#323232",
          x: 0.7,
        },
      };
    case "exhale_hold":
      return {
        config: {
          duration: duration,
        },
        from: {
          color: "#323232",
          transform: "scale(0.5)",
          x: 1,
        },
        to: {
          transform: "scale(0.5)",
          color: "#313131",
          x: 0.7,
        },
      };
  }
};

export const Breathing: React.FC<BreathingProps> = ({ breathings = [] }) => {
  const [toggle, setToggle] = useState(false);
  const breathingsSize = breathings.length;
  const [index, setIndex] = useState(0);

  const props = useSpring({
    ...extractDelayAndDuration(breathings[index]),
    reset: true,
    reverse: toggle,
    onRest: () => {
      setIndex((prev) => {
        const next = (prev + 1) % breathingsSize;
        return next;
      });
      setToggle(!toggle);
    },
  });
  useEffect(() => {
    setIndex(0);
    setToggle(false);
  }, [breathings]);

  return (
    <Box sx={{ p: 6 }}>
      <Flex
        sx={{
          size: "500px",
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
        }}
      >
        <animated.div
          style={{
            width: props.x.to((x: number) => `${x * 100}%`),
            height: props.x.to((x: number) => `${x * 100}%`),
            backgroundColor: "blue",
            borderRadius: "50%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          y
        </animated.div>
        <Flex
          sx={{
            size: "70%",
            alignItems: "center",
            justifyContent: "center",
            position: "absolute",
          }}
        >
          <animated.div
            style={{
              transform: props.transform,
              width: "100%",
              height: "100%",
              backgroundColor: "white",
              borderRadius: "50%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <animated.div
              style={{
                color: props.color,
                fontSize: "80px",
                position: "absolute",
                fontWeight: "bold",
              }}
            >
              <Text sx={{ color: "primary", userSelect: "none" }}>
                {breathings[index].label}
              </Text>
            </animated.div>
          </animated.div>
        </Flex>
      </Flex>
    </Box>
  );
};
