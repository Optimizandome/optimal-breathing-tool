import { Box, Flex } from "theme-ui";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useSound } from "use-sound";
import debounce from "lodash.debounce";
import { StringParam, useQueryParams } from "use-query-params";
import Lottie from "lottie-react";
import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css";
import { useTranslation } from "react-i18next";

import { RootState, setRightMenuState, updateBreathings } from "store";
import { BreathProtocol } from "types";
import {
  BreathSlab,
  ConfirmationDialog,
  ProtocolInformation,
  SuccessPracticeDialog,
} from "components";
import { BreathState } from "components/organisms/BreathSlab.def";
import { FIXED_PROTOCOLS } from "constants/config";
import { delay, getActiveProtocol } from "utils";
import celebration from "assets/animation/celebration.json";
import changeStateSound from "assets/sounds/bells.mp3";
import inhale_es from "assets/sounds/inhale_es.mp3";
import exhale_es from "assets/sounds/exhale_es.mp3";
import hold_es from "assets/sounds/hold_es.mp3";
import inhale_en from "assets/sounds/inhale_en.mp3";
import exhale_en from "assets/sounds/exhale_en.mp3";
import hold_en from "assets/sounds/hold_en.mp3";
import { useNoSleep } from "utils/hooks";

export const BreathingFeed: React.FC = () => {
  const { i18n } = useTranslation();
  const inhaleSound = i18n.language.includes("en") ? inhale_en : inhale_es;
  const exhaleSound = i18n.language.includes("en") ? exhale_en : exhale_es;
  const holdSound = i18n.language.includes("en") ? hold_en : hold_es;
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
  const [enabledTempoSounds, setEnabledTempoSounds] = useState(false);

  const [currentBreathingState, setCurrentBreathingState] =
    useState<BreathState>("standBy");

  const isPracticing = currentBreathingState === "breathing";
  useNoSleep(isPracticing);

  const totalTime = minutes * 60 + seconds;

  const dispatch = useDispatch();
  const { t } = useTranslation();

  const [playExhaleStateSound] = useSound(exhaleSound, {
    interrupt: true,
    soundEnabled: enabledTempoSounds,
  });
  const [playInhaleStateSound] = useSound(inhaleSound, {
    interrupt: true,
    soundEnabled: enabledTempoSounds,
  });
  const [playHoldStateSound] = useSound(holdSound, {
    interrupt: true,
    soundEnabled: enabledTempoSounds,
  });
  const [initPracticeSound] = useSound(inhaleSound, {
    interrupt: true,
  });
  const [endPracticeSound] = useSound(changeStateSound, {
    interrupt: true,
  });

  const onTimerCompletedHandler = () => {
    setCurrentBreathingState("breathing");

    // default start
    setEnabledTempoSounds(true);
    initPracticeSound();
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
            title={t("areYouSure")}
            message={t("confirmLost")}
          />
        ),
      });
    } else {
      dispatch(setRightMenuState(!isRightMenuOpen));
    }
  };

  const onTempoChangeHandler = (index: number) => {
    if (window.navigator.vibrate && withVibration)
      window.navigator.vibrate(300);

    if (
      withSound &&
      !showCelebration &&
      currentBreathingState === "breathing"
    ) {
      switch (index) {
        case 0:
          playInhaleStateSound();

          break;
        case 1:
          playHoldStateSound();
          break;
        case 2:
          playExhaleStateSound();
          break;
        case 3:
          playHoldStateSound();
          break;
        default:
          playExhaleStateSound();
          break;
      }
    }
  };

  const onCompletePracticeHandler = async () => {
    setEnabledTempoSounds(false);
    await delay(80);
    endPracticeSound();
    setShowCelebration(true);
    await delay(100);
    setCurrentBreathingState("standBy");
    await delay(1200);
    confirmAlert({
      customUI: SuccessPracticeDialog as any,
      title: t("congratulations"),
      message: t("congratsMessage"),
    });
    await delay(800);
    setShowCelebration(false);
  };

  const debouncedTempoChange = debounce(onTempoChangeHandler, 80);

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
        practiceDuration={totalTime}
        onCompletePractice={onCompletePracticeHandler}
        onShowInformation={showInformationHandler}
      />
    </>
  );
};
