import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { BreathingAnimation } from "types";

export type BreathState = {
  breathings: [
    BreathingAnimation,
    BreathingAnimation,
    BreathingAnimation,
    BreathingAnimation
  ];
};

const initialState: BreathState = {
  breathings: [
    {
      duration: 4,
      breathingState: "inhale",
      label: "Inhale",
      color: "#D1C4E9",
    },
    {
      duration: 0,
      breathingState: "inhale_hold",
      label: "Hold",
      color: "#7E57C2",
    },
    {
      duration: 6,
      breathingState: "exhale",
      label: "Exhale",
      color: "#C5CAE9",
    },
    {
      duration: 4,
      breathingState: "exhale_hold",
      label: "Hold",
      color: "#5C6BC0",
    },
  ],
};

export const breathingSlice = createSlice({
  name: "breathing",
  initialState,
  reducers: {
    updateSingleBreathing: (
      state,
      action: PayloadAction<{ duration: number; index: number }>
    ) => {
      const { duration, index } = action.payload;
      state.breathings = state.breathings.map((breathing, i) =>
        i === index ? { ...breathing, duration } : breathing
      ) as BreathState["breathings"];
    },
    updateBreathings: (
      state,
      action: PayloadAction<{ times: [number, number, number, number] }>
    ) => {
      const { times } = action.payload;
      state.breathings = state.breathings.map((breath, index) => ({
        ...breath,
        duration: times[index],
      })) as BreathState["breathings"];
    },
  },
});

export const { updateSingleBreathing, updateBreathings } =
  breathingSlice.actions;

export const breathingReducer = breathingSlice.reducer;
