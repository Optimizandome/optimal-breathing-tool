import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { BreathingAnimation } from "types";

export type BreathState = {
  breathings: [
    BreathingAnimation,
    BreathingAnimation,
    BreathingAnimation,
    BreathingAnimation
  ];
  config: {
    duration: {
      minutes: number;
      seconds: number;
    };
    indicators: {
      withSound: boolean;
      withTimer: boolean;
      withVibration: boolean;
    };
  };
};

const initialState: BreathState = {
  breathings: [
    {
      duration: 4,
      breathingState: "inhale",
      label: "Inhalar",
      color: "#D1C4E9",
    },
    {
      duration: 0,
      breathingState: "inhale_hold",
      label: "Retener",
      color: "#7E57C2",
    },
    {
      duration: 6,
      breathingState: "exhale",
      label: "Exhalar",
      color: "#C5CAE9",
    },
    {
      duration: 4,
      breathingState: "exhale_hold",
      label: "Retener",
      color: "#5C6BC0",
    },
  ],
  config: {
    duration: {
      minutes: 1,
      seconds: 0,
    },
    indicators: {
      withSound: true,
      withTimer: true,
      withVibration: false,
    },
  },
};

export const breathingSlice = createSlice({
  name: "breathing",
  initialState,
  reducers: {
    updateSingleBreathing: (
      state: BreathState,
      action: PayloadAction<{ duration: number; index: number }>
    ) => {
      const { duration, index } = action.payload;
      state.breathings = state.breathings.map((breathing, i) =>
        i === index ? { ...breathing, duration } : breathing
      ) as BreathState["breathings"];
    },
    updateBreathings: (
      state: BreathState,
      action: PayloadAction<{ times: [number, number, number, number] }>
    ) => {
      const { times } = action.payload;
      state.breathings = state.breathings.map((breath, index) => ({
        ...breath,
        duration: times[index],
      })) as BreathState["breathings"];
    },
    updateIndicators: (
      state: BreathState,
      action: PayloadAction<BreathState["config"]["indicators"]>
    ) => {
      state.config.indicators = action.payload;
    },
    toggleIndicator: (
      state: BreathState,
      action: PayloadAction<keyof BreathState["config"]["indicators"]>
    ) => {
      state.config.indicators[action.payload] =
        !state.config.indicators[action.payload];
    },
    updateDuration: (
      state: BreathState,
      action: PayloadAction<Partial<BreathState["config"]["duration"]>>
    ) => {
      state.config.duration = {
        ...state.config.duration,
        ...action.payload,
      };
    },
  },
});

export const {
  updateSingleBreathing,
  updateBreathings,
  updateIndicators,
  toggleIndicator,
  updateDuration,
} = breathingSlice.actions;

export const breathingReducer = breathingSlice.reducer;
