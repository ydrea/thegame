import { createSlice } from "@reduxjs/toolkit";
// import { selectEm } from "./dataSlice";

const initialState = {
  count: 0,
};

// prettier-ignore
export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {state.count += 1},
    decrement: (state) => {state.count -= 1},
  },
});

export const { increment, decrement } = counterSlice.actions;
export const selectCount = (state) => state.counter.count;
export default counterSlice.reducer;
