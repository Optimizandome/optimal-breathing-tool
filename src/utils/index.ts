import { BreathingAnimation, BreathsSet } from "types";

export const BreathAnimationToMilliseconds = (
  breathings: BreathingAnimation[]
): BreathingAnimation[] => {
  return breathings.map((breathing) => {
    return {
      ...breathing,
      duration: breathing.duration * 1000,
    };
  });
};

export const isBreathSetActive = (
  set: BreathsSet,
  breathings: BreathingAnimation[]
): boolean => {
  const setTimes = set.breaths;

  for (var i = 0; i < setTimes.length; ++i) {
    if (setTimes[i] !== breathings[i].duration) return false;
  }

  return true;
};
