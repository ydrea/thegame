import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  boo: false,
};

// prettier-ignore
export const boolSlice = createSlice({
  name: "boolean",
  initialState,
  reducers: {
    itsTrue: (state)=>{state.boo=true},
    itsFalse: (state)=>{state.boo=false},
    toggle: (state, action) => {state.boo = action.payload.boo},
    toggleSw: (state) => {state.boo = !state.boo},
  },
});
//actions
export const { toggle, toggleSw, itsTrue, itsFalse } = boolSlice.actions;
//selectors
export const selectToggle = (state) => state.boolean.boo;
//reducer
export default boolSlice.reducer;
