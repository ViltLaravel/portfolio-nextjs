import { configureStore } from "@reduxjs/toolkit";

import globalSlice from "./app/_redux/global-slice";

export const store = configureStore({
  reducer: {
    globalState: globalSlice,
  },
});

export type AppDispatch = typeof store.dispatch;
export type GetState = typeof store.getState;
export type RootState = ReturnType<typeof store.getState>;
