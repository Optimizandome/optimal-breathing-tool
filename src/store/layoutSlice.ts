import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type LayoutState = {
  isRightMenuOpen: boolean;
};

const initialState: LayoutState = {
  isRightMenuOpen: false,
};

export const layoutSlice = createSlice({
  name: "layout",
  initialState,
  reducers: {
    setRightMenuState: (state, action: PayloadAction<boolean>) => {
      state.isRightMenuOpen = action.payload;
    },
  },
});

export const { setRightMenuState } = layoutSlice.actions;

export const layoutReducer = layoutSlice.reducer;
