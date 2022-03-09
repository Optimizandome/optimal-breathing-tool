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
      duration: 2000,
      breathingState: "inhale",
      label: "Inhale",
      color: "#D1C4E9",
    },
    {
      duration: 1000,
      breathingState: "inhale_hold",
      label: "Hold",
      color: "#7E57C2",
    },
    {
      duration: 2000,
      breathingState: "exhale",
      label: "Exhale",
      color: "#C5CAE9",
    },
    {
      duration: 1000,
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
    updateBreathings: (
      state,
      action: PayloadAction<{ duration: number; index: number }>
    ) => {
      const { duration, index } = action.payload;
      state.breathings = state.breathings.map((breathing, i) =>
        i === index ? { ...breathing, duration: duration * 1000 } : breathing
      ) as BreathState["breathings"];
    },
  },
});

export const { updateBreathings } = breathingSlice.actions;

export const breathingReducer = breathingSlice.reducer;
