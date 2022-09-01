import { createSlice } from "@reduxjs/toolkit";
// import { useSelector } from "react-redux";
import importedData from "../data/db.json";

// prettier-ignore
export const dataSlice = createSlice({
  name: "loc",
  initialState: importedData,
  reducers: {
    // setIt: (state) => {state},
    reSet: (state) => (state=[]),
  },
});

export const { setIt, reSet } = dataSlice.actions;
export const selectEm = (state) => state;

export default dataSlice.reducer;
