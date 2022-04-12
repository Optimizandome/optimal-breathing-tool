import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useSound } from "use-sound";
import debounce from "lodash.debounce";

import { RootState, setRightMenuState, updateBreathings } from "store";
import { BreathsSet } from "types";
import { BreathSlab } from "components";
import { BreathState } from "components/organisms/BreathSlab.def";
import changeStateSound from "assets/sounds/bells.mp3";

export const BreathingFeed: React.FC = () => {
  const {
    breathings,
    config: {
      indicators: { withSound, withVibration, withTimer },
    },
  } = useSelector((state: RootState) => state.breath);
  const isRightMenuOpen = useSelector(
    (state: RootState) => state.layout.isRightMenuOpen
  );

  const [currentBreathingState, setCurrentBreathingState] =
    useState<BreathState>("standBy");

  const dispatch = useDispatch();

  const [playChangeStateSound] = useSound(changeStateSound);

  const onTimerCompletedHandler = () => {
    setCurrentBreathingState("breathing");
  };

  const onStartHandler = () => {
    setCurrentBreathingState("countDown");
  };

  const onSelectBreathSetHandler = (set: BreathsSet) => {
    dispatch(setRightMenuState(false));
    dispatch(updateBreathings({ times: set.breaths }));
  };

  const onConfigHandler = () => {
    dispatch(setRightMenuState(!isRightMenuOpen));
  };

  const onTempoChangeHandler = () => {
    if (window.navigator.vibrate && withVibration)
      window.navigator.vibrate(300);
    withSound && playChangeStateSound();
  };

  const debouncedTempoChange = debounce(onTempoChangeHandler, 50);

  useEffect(() => {
    setCurrentBreathingState("standBy");
  }, [breathings, withSound, withVibration, withTimer]);

  return (
    <>
      <BreathSlab
        breathings={breathings}
        breathingState={currentBreathingState}
        onTimerCompleted={onTimerCompletedHandler}
        onStart={onStartHandler}
        onConfig={onConfigHandler}
        selectBreathSet={onSelectBreathSetHandler}
        onTempoChange={debouncedTempoChange}
        showTimer={withTimer}
      />
    </>
  );
};
