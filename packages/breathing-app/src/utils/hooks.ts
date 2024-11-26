import { useEffect, useState } from "react";
import useStayAwake from "use-stay-awake";

export const useTimer = (init: number, onComplete?: () => void) => {
  const [count, setCount] = useState(init);
  const [paused, setPaused] = useState(false);
  const togglePause = () => {
    setPaused(!paused);
  };

  const execCallback = () => {
    setTimeout(() => {
      onComplete?.();
    }, 100);
  };
  const reset = () => {};
  useEffect(() => {
    const timer = setInterval(() => {
      setCount((t) => {
        if (t === 1) {
          execCallback();
          clearInterval(timer);
          return 1;
        }

        if (paused) return t;
        return t - 1;
      });
    }, 1000);
    return () => clearInterval(timer);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return { count, reset, togglePause };
};

export const useNoSleep = (isPracticing: boolean) => {
  const device = useStayAwake();
  useEffect(() => {
    if (isPracticing) {
      console.log("preventSleeping");
      device.preventSleeping();
    } else {
      console.log("allowSleeping");
      device.allowSleeping();
    }
  }, [isPracticing, device]);
};
