import { useSelector, useDispatch } from "react-redux";

import {
  updateSingleBreathing,
  RootState,
  setRightMenuState,
  toggleIndicator,
} from "store";
import { RightSideMenu } from "components";

export const BreathingControl: React.FC = () => {
  const {
    breathings,
    config: { indicators },
  } = useSelector((state: RootState) => state.breath);

  const dispatch = useDispatch();

  const updateHandler = (index: number, duration: number) => {
    dispatch(updateSingleBreathing({ duration, index }));
  };

  const onCloseHandler = () => {
    dispatch(setRightMenuState(false));
  };

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
      />
    </>
  );
};
