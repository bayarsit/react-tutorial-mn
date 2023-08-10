import { createSlice } from "@reduxjs/toolkit";

// MAKING THEM ALL IN ONE PLACE, SIMPLE, EASY TO READ
export const counterSlice = createSlice({
  //    STATE
  name: "counter",
  initialState: {
    count: 0,
  },
  //    REDUCERS
  reducers: {
    //  ACTIONS
    increment: (state) => {
      state.count += 1;
    },
    decrement: (state) => {
      state.count -= 1;
    },
    incrementByAmount: (state, action) => {
      state.count += action.payload;
    },
  },
});

//
export const { increment, decrement, incrementByAmount } = counterSlice.actions;

export default counterSlice.reducer;
