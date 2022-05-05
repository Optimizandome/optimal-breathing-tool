import { Box, Flex } from "theme-ui";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useSound } from "use-sound";
import debounce from "lodash.debounce";
import { StringParam, useQueryParams } from "use-query-params";
import Lottie from "lottie-react";
import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css";

import { RootState, setRightMenuState, updateBreathings } from "store";
import { BreathProtocol } from "types";
import {
  BreathSlab,
  ConfirmationDialog,
  ProtocolInformation,
  SuccessPracticeDialog,
} from "components";
import { BreathState } from "components/organisms/BreathSlab.def";
import changeStateSound from "assets/sounds/bells.mp3";
import { FIXED_PROTOCOLS } from "constants/config";
import { delay, getActiveProtocol } from "utils";
import celebration from "assets/animation/celebration.json";

export const BreathingFeed: React.FC = () => {
  const {
    breathings,
    config: {
      indicators: { withSound, withVibration, withTimer },
      duration: { minutes, seconds },
    },
  } = useSelector((state: RootState) => state.breath);
  const isRightMenuOpen = useSelector(
    (state: RootState) => state.layout.isRightMenuOpen
  );
  const [query, setQuery] = useQueryParams({
    protocol: StringParam,
  });

  const [showCelebration, setShowCelebration] = useState(false);

  const [currentBreathingState, setCurrentBreathingState] =
    useState<BreathState>("standBy");

  const isPracticing = currentBreathingState === "breathing";

  const dispatch = useDispatch();

  const [playChangeStateSound] = useSound(changeStateSound);

  const onTimerCompletedHandler = () => {
    setCurrentBreathingState("breathing");
  };

  const onStartHandler = () => {
    dispatch(setRightMenuState(false));
    setCurrentBreathingState("countDown");
  };

  const onSelectBreathSetHandler = (set: BreathProtocol) => {
    dispatch(setRightMenuState(false));
    dispatch(updateBreathings({ times: set.breaths }));
  };

  const onConfigHandler = () => {
    if (isPracticing) {
      confirmAlert({
        customUI: ({ onClose }) => (
          <ConfirmationDialog
            onContinue={() => {
              setCurrentBreathingState("standBy");
              dispatch(setRightMenuState(!isRightMenuOpen));
              onClose();
            }}
            onCancel={() => {
              onClose();
            }}
            title="¿Estás seguro?"
            message="Tu práctica actual se perderá"
          />
        ),
      });
    } else {
      dispatch(setRightMenuState(!isRightMenuOpen));
    }
  };

  const onTempoChangeHandler = () => {
    if (window.navigator.vibrate && withVibration)
      window.navigator.vibrate(300);
    withSound && playChangeStateSound();
  };

  const onCompletePracticeHandler = async () => {
    setCurrentBreathingState("standBy");
    setShowCelebration(true);
    await delay(1200);
    confirmAlert({
      customUI: SuccessPracticeDialog,
    });
    await delay(800);
    setShowCelebration(false);
  };

  const debouncedTempoChange = debounce(onTempoChangeHandler, 50);

  const showInformationHandler = (info: BreathProtocol) => {
    confirmAlert({
      customUI: ({ onClose }) => (
        <ProtocolInformation
          onClose={() => {
            onClose();
          }}
          protocol={info}
        />
      ),
    });
  };

  useEffect(() => {
    setCurrentBreathingState("standBy");

    // @TODO: (performance) change selectBreathSet to send protocol id, then update slice update to find id in FIXED_PROTOCOLS
    const activeProtocol = getActiveProtocol(FIXED_PROTOCOLS, breathings);
    if (activeProtocol) {
      setQuery({ protocol: activeProtocol.id });
    }
  }, [breathings, withSound, withVibration, withTimer, setQuery]);

  useEffect(() => {
    if (query.protocol) {
      // @TODO: (performance) change FIXED_PROTOCOLS type to Map type instead of array to use id as key map
      const queryProtocol = FIXED_PROTOCOLS.find(
        (p) => p.id === query.protocol
      );
      if (queryProtocol) {
        dispatch(updateBreathings({ times: queryProtocol.breaths }));
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const celebrate = () => (
    <Flex
      sx={{
        width: "100vw",
        height: "100vh",
        position: "absolute",
        top: 0,
        left: 0,
        zIndex: 3,
        justifyContent: "center",
      }}
    >
      <Box sx={{ size: ["90%", "600px"] }}>
        <Lottie animationData={celebration} />
      </Box>
    </Flex>
  );

  return (
    <>
      {showCelebration && celebrate()}
      <BreathSlab
        breathings={breathings}
        breathingState={currentBreathingState}
        onTimerCompleted={onTimerCompletedHandler}
        onStart={onStartHandler}
        onConfig={onConfigHandler}
        selectBreathSet={onSelectBreathSetHandler}
        onTempoChange={debouncedTempoChange}
        showTimer={withTimer}
        practiceDuration={minutes * 60 + seconds}
        onCompletePractice={onCompletePracticeHandler}
        onShowInformation={showInformationHandler}
      />
    </>
  );
};
