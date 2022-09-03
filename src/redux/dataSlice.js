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
//

export const selectLocationByPid = (state, id) =>
  state.dataJSON.locations.find((i) => i.id === id);

export const selectPlanetsByPid = (state, pid) =>
  state.dataJSON.planets.find((ii) => ii.pid === pid);

//
export default dataSlice.reducer;
