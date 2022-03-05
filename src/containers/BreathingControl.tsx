import { useSelector, useDispatch } from "react-redux";

import { updateBreathings, RootState } from "store";
import { BreathingConfig } from "components";

export const BreathingControl: React.FC = () => {
  const breathings = useSelector((state: RootState) => state.breath.breathings);

  const dispatch = useDispatch();

  const updateHandler = (index: number, duration: number) => {
    dispatch(updateBreathings({ duration, index }));
  };

  return (
    <>
      <BreathingConfig
        onUpdateBreathing={updateHandler}
        currentBreathings={breathings}
      />
    </>
  );
};
