import { configureStore } from "@reduxjs/toolkit";

import { breathingReducer } from "./breathSlice";

export const store = configureStore({
  reducer: { breath: breathingReducer },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
