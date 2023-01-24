import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./rootReducer";

const reduxStore = configureStore({
  reducer: rootReducer,
});

export default reduxStore;

export type RootState = ReturnType<typeof reduxStore.getState>;
export type AppDispatch = typeof reduxStore.dispatch;
