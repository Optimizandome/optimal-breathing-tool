import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { BreathingAnimation } from "types";

export type CounterState = {
  breathings: [
    BreathingAnimation,
    BreathingAnimation,
    BreathingAnimation,
    BreathingAnimation
  ];
};

const initialState: CounterState = {
  breathings: [
    {
      duration: 1500,
      breathingState: "inhale",
      label: "Inhale",
      color: "blue",
    },
    {
      duration: 1500,
      breathingState: "inhale_hold",
      label: "Hold",
      color: "blue",
    },
    {
      duration: 1500,
      breathingState: "exhale",
      label: "Exhale",
      color: "blue",
    },
    {
      duration: 1500,
      breathingState: "exhale_hold",
      label: "Hold",
      color: "blue",
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
      ) as CounterState["breathings"];
    },
  },
});

export const { updateBreathings } = breathingSlice.actions;

export const breathingReducer = breathingSlice.reducer;
