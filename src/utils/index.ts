import { BreathingAnimation, BreathProtocol } from "types";

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
  set: BreathProtocol,
  breathings: BreathingAnimation[]
): boolean => {
  const setTimes = set.breaths;

  for (var i = 0; i < setTimes.length; ++i) {
    if (setTimes[i] !== breathings[i].duration) return false;
  }

  return true;
};

export const getActiveProtocol = (
  sets: BreathProtocol[],
  currentBreathings: BreathingAnimation[]
) => {
  for (const set of sets) {
    if (isBreathSetActive(set, currentBreathings)) {
      return set;
    }
  }
  return null;
};

export const delay = (ms: number) => new Promise((res) => setTimeout(res, ms));
