import { useState } from "react";
import { animated, useSpring, useTrail, config } from "react-spring";
import { Flex, Text } from "theme-ui";

const size = (input: number) => ({ width: `${input}%`, height: `${input}%` });

const Circlet: React.FC = ({ children }) => {
  return (
    <Flex sx={{ bg: "secondary", borderRadius: "50%", size: "100%" }}>
      {children}
    </Flex>
  );
};

const AnimatedCircle = animated(Circlet);

export const VisualBreathing: React.FC<{ state?: string }> = () => {
  const [toggle, setToggle] = useState(false);
  const timesArr = [7000, 2000, 7000, 3000];
  const stringsARr = ["👻", "🌊", "🤢", "👎"];
  const timesSize = timesArr.length;
  const [index, setIndex] = useState(0);

  const props = useSpring({
    //loop: true,
    to: { ...size(10) },
    from: { ...size(100) },
    reset: true,
    reverse: toggle,
    delay: 200,
    config: {
      duration: timesArr[index],
    },
    onRest: () => {
      setIndex((prev) => {
        const next = (prev + 1) % timesSize;
        return next;
      });
      setToggle(!toggle);
    },
  });

  return (
    <div>
      <button
        onClick={() => {
          setToggle(!toggle);
        }}
      >
        toggle
      </button>
      {index}
      <hr />
      <Flex
        sx={{
          size: "600px",
          alignItems: "center",
          justifyContent: "center",
          bg: "primary",
        }}
      >
        <animated.div
          style={{
            ...props,
            background: "red",
            borderRadius: "50%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text sx={{ fontSize: "40px" }}>{stringsARr[index]}</Text>
        </animated.div>
      </Flex>
    </div>
  );
};
