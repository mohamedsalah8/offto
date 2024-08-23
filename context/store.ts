import { configureStore } from "@reduxjs/toolkit";

import Controllers from "./futures/elementsControllers";

export const store = configureStore({
  reducer: {
    Controllers,
  },
  devTools: process.env.NODE_ENV !== "production",
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
