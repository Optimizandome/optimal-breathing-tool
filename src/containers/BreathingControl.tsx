import { useSelector, useDispatch } from "react-redux";
import { useQueryParams, NumberParam } from "use-query-params";

import {
  updateSingleBreathing,
  RootState,
  setRightMenuState,
  toggleIndicator,
  updateDuration,
} from "store";
import { RightSideMenu } from "components";
import { useEffect } from "react";

export const BreathingControl: React.FC = () => {
  const {
    breathings,
    config: { indicators, duration },
  } = useSelector((state: RootState) => state.breath);

  const [query, setQuery] = useQueryParams({
    mins: NumberParam,
    secs: NumberParam,
  });

  const dispatch = useDispatch();

  const updateHandler = (index: number, duration: number) => {
    dispatch(updateSingleBreathing({ duration, index }));
  };

  const onCloseHandler = () => {
    dispatch(setRightMenuState(false));
  };

  useEffect(() => {
    setQuery({
      mins: duration.minutes,
      secs: duration.seconds,
    });
  }, [duration, setQuery]);

  useEffect(() => {
    if (query.mins && query.secs) {
      dispatch(updateDuration({ minutes: query.mins, seconds: query.secs }));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <RightSideMenu
        onClose={onCloseHandler}
        onUpdateBreathing={updateHandler}
        currentBreathings={breathings}
        indicators={indicators}
        onToggleIndicator={(indicator) => {
          dispatch(toggleIndicator(indicator));
        }}
        duration={duration}
        onDurationChange={(key, value) => {
          dispatch(updateDuration({ [key]: value }));
        }}
      />
    </>
  );
};
