import { createSlice } from "@reduxjs/toolkit";

type NameState = {};

const initialState = {} as NameState;

export const Name = createSlice({
  name: "Name",
  initialState,
  reducers: {},
});

export const {} = Name.actions;
export default Name.reducer;
