import { createSlice } from "@reduxjs/toolkit";

import { adsStatus, bookSlider, flightType } from "../actions/elementsActions";
import { ControllersTypies } from "../types/types";

const initialState = {
  bookSlide: "Flight",
  flightType: "roundTrip",
  adsState: true,
} as ControllersTypies;

export const Controllers = createSlice({
  name: "Controllers",
  initialState,
  reducers: {
    bookSlideSetter: bookSlider,
    flightTypeStter: flightType,
    adsStatusStter: adsStatus,
  },
});

export const { bookSlideSetter, flightTypeStter, adsStatusStter } =
  Controllers.actions;
export default Controllers.reducer;
