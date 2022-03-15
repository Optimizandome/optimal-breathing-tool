import { useSelector, useDispatch } from "react-redux";

import { updateSingleBreathing, RootState, setRightMenuState } from "store";
import { RightSideMenu } from "components";

export const BreathingControl: React.FC = () => {
  const breathings = useSelector((state: RootState) => state.breath.breathings);

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
      />
    </>
  );
};
