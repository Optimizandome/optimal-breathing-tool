import {
  animated,
  config,
  useChain,
  useSpring,
  useSpringRef,
} from "@react-spring/web";
import { useState } from "react";
import { BreathingCircleProps } from "./BreathingCircle.definitions";

export const CircletBreathing: React.FC<BreathingCircleProps> = ({
  breathings,
}) => {
  const [animating, setAnimating] = useState(false);

  const spring01Api = useSpringRef();

  const { size: size1, ...rest01 } = useSpring({
    ref: spring01Api,
    config: config.stiff,
    from: { size: "20%", background: "hotpink" },
    to: {
      size: animating ? "100%" : "20%",
      background: animating ? "white" : "hotpink",
    },
  });

  const spring02Api = useSpringRef();
  const { size: size2, ...rest02 } = useSpring({
    ref: spring02Api,
    config: config.stiff,
    from: { size: "100%", background: "hotpink" },
    to: {
      size: animating ? "20%" : "100%",
      background: animating ? "white" : "hotpink",
    },
  });

  useChain(
    animating ? [spring01Api, spring02Api] : [spring02Api, spring01Api],
    [0, animating ? 0.1 : 0.6]
  );

  return (
    <>
      <button
        onClick={() => {
          setAnimating(!animating);
        }}
      >
        start this animations
      </button>
      <animated.div style={{ ...rest01, width: size1, height: size1 }}>
        x
      </animated.div>
      <animated.div style={{ ...rest02, width: size2, height: size2 }}>
        x
      </animated.div>
    </>
  );
};
