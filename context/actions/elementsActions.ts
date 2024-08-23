import { PayloadAction } from "@reduxjs/toolkit";

import { ControllersTypies } from "../types/types";

export const bookSlider = (
  state: ControllersTypies,
  action: PayloadAction<"Flight" | "Hotel" | "Packages">
) => {
  state.bookSlide = action.payload;
};

export const flightType = (
  state: ControllersTypies,
  actions: PayloadAction<"roundTrip" | "oneWay" | "MaltyCity">
) => {
  state.flightType = actions.payload;
};

export const adsStatus = (
  state: ControllersTypies,
  action: PayloadAction<boolean>
) => {
  state.adsState = action.payload;
};
