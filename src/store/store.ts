import { configureStore } from "@reduxjs/toolkit";

import { breathingReducer } from "./breathSlice";
import { layoutReducer } from "./layoutSlice";

export const store = configureStore({
  reducer: { breath: breathingReducer, layout: layoutReducer },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
