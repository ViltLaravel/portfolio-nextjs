import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { GlobalState } from "./global-state";

export const initialState: GlobalState = {
  showMenu: false,
};

export const globalSlice = createSlice({
  name: "globalSlice",
  initialState,
  reducers: {
    showMenuToogled(state: GlobalState, actions: PayloadAction<boolean>) {
      return {
        ...state,
        showMenu: actions.payload,
      };
    },
  },
});

export const { showMenuToogled } = globalSlice.actions;

export default globalSlice.reducer;
