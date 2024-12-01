import { Countdown } from "components/atoms";
import { useState, useEffect } from "react";
import { animated, useSpring } from "react-spring";
import { Box, Flex, Text } from "theme-ui";

import { BreathingAnimation } from "types";
import { BreathingProps } from "./BreathingAnimation.def";

const extractDelayAndDuration = ({
  currentState,
  previousState,
}: {
  currentState: BreathingAnimation;
  previousState: BreathingAnimation;
}): any => {
  const { breathingState, duration, color } = currentState;
  const { color: prevColor } = previousState;
  switch (breathingState) {
    case "inhale":
      return {
        config: {
          duration: duration,
        },
        from: {
          transform: "scale(0.6)",
          color: prevColor,
          x: 1,
        },
        to: {
          transform: "scale(1)",
          color: color,
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
          color: color,
          x: 0,
        },
        to: {
          transform: "scale(1)",
          color: prevColor,
          x: 1,
        },
      };
    case "exhale":
      return {
        config: {
          duration: duration,
        },
        from: {
          transform: "scale(1)",
          color: prevColor,
          x: 0,
        },
        to: {
          transform: "scale(0.6)",
          color: color,
          x: 0,
        },
      };
    case "exhale_hold":
      return {
        config: {
          duration: duration,
        },
        from: {
          transform: "scale(0.6)",
          color: color,
          x: 1,
        },
        to: {
          transform: "scale(0.6)",
          color: prevColor,
          x: 0,
        },
      };
  }
};

// duration in milliseconds
export const Breathing: React.FC<BreathingProps> = ({
  breathings = [],
  showTimer,
  onTempoChange,
}) => {
  const [toggle, setToggle] = useState(false);
  const breathingsSize = breathings.length;
  const [index, setIndex] = useState(0);

  const props = useSpring({
    ...extractDelayAndDuration({
      currentState: breathings[index],
      previousState: breathings[(index + breathingsSize - 1) % breathingsSize],
    }),
    reset: true,
    reverse: toggle,
    onRest: () => {
      setIndex((prev) => {
        const next = (prev + 1) % breathingsSize;
        onTempoChange?.(next);
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
    <Flex
      sx={{
        size: "100%",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
      }}
    >
      <Box sx={{ position: "absolute", top: "-20px", p: 1 }}>
        {breathings[index].duration > 0 && showTimer && (
          <Countdown initialTime={breathings[index].duration} showTotal />
        )}
      </Box>
      <animated.div
        style={{
          width: "100%",
          height: "100%",
          borderRadius: "50%",
          backgroundColor: props.color,
          transition: "background .2s ease",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      ></animated.div>
      <Flex
        sx={{
          size: "80%",
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
              transition: "color 0.2s ease",
              color: props.color,
              position: "absolute",
              fontWeight: "bold",
            }}
          >
            <Text sx={{ userSelect: "none", fontSize: [6, 7, 8] }}>
              {breathings[index].label}
            </Text>
          </animated.div>
        </animated.div>
      </Flex>
    </Flex>
  );
};
