import { createSlice } from "@reduxjs/toolkit";
import importedData from "../data/db.json";

// prettier-ignore
export const dataSlice = createSlice({
  name: "loc",
  initialState: importedData,
  reducers: {
    setIt: (state)=>(state),
    reSet: (state) => (state=[]),
  },
});

export const { setIt, reSet } = dataSlice.actions;
export const selectEm = (state) => state;
export const selectLocations = (state) => state.dataJSON.locations;
export const selectPlanets = (state) => state.dataJSON.planets;

export default dataSlice.reducer;
