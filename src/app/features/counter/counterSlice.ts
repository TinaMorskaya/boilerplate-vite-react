import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../reduxStore";

interface CounterState {
  counterValue: number;
}

const initialCounterState: CounterState = {
  counterValue: 0,
};

export const counterSlice = createSlice({
  name: "counter",
  initialState: initialCounterState,
  reducers: {
    increment: (state) => {
      state.counterValue += 1;
    },
    decrement: (state) => {
      state.counterValue -= 1;
    },
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.counterValue += action.payload;
    },
  },
});

export const { increment, decrement, incrementByAmount } = counterSlice.actions;
export const selectCount = (state: RootState) => state.counter.counterValue;
export default counterSlice.reducer;
