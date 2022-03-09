import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { RootState, setRightMenuState } from "store";

import { BreathSlab } from "components";
import { BreathState } from "components/organisms/BreathSlab.def";

export const BreathingFeed: React.FC = () => {
  const breathings = useSelector((state: RootState) => state.breath.breathings);
  const isRightMenuOpen = useSelector(
    (state: RootState) => state.layout.isRightMenuOpen
  );

  const [currentBreathingState, setCurrentBreathingState] =
    useState<BreathState>("standBy");

  const dispatch = useDispatch();

  const onTimerCompletedHandler = () => {
    setCurrentBreathingState("breathing");
  };

  const onStartHandler = () => {
    setCurrentBreathingState("countDown");
  };

  const onConfigHandler = () => {
    dispatch(setRightMenuState(!isRightMenuOpen));
  };

  useEffect(() => {
    setCurrentBreathingState("standBy");
  }, [breathings]);

  return (
    <>
      <BreathSlab
        breathings={breathings}
        breathingState={currentBreathingState}
        onTimerCompleted={onTimerCompletedHandler}
        onStart={onStartHandler}
        onConfig={onConfigHandler}
      />
    </>
  );
};
