import { useState, useEffect } from "react";
import { useSelector } from "react-redux";

import { RootState } from "store";
import { BreathSlab } from "components";
import { BreathState } from "components/organisms/BreathSlab.def";

export const BreathingFeed: React.FC = () => {
  const breathings = useSelector((state: RootState) => state.breath.breathings);
  const [currentBreathingState, setCurrentBreathingState] =
    useState<BreathState>("standBy");

  const onTimerCompletedHandler = () => {
    setCurrentBreathingState("breathing");
  };

  const onStartHandler = () => {
    setCurrentBreathingState("countDown");
  };

  useEffect(() => {
    setCurrentBreathingState("standBy");
  }, [breathings]);

  return (
    <>
      <BreathSlab
        breathingState={currentBreathingState}
        breathings={breathings}
        onStart={onStartHandler}
        onTimerCompleted={onTimerCompletedHandler}
      />
    </>
  );
};
