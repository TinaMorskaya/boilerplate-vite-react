import { configureStore, PreloadedState } from "@reduxjs/toolkit";
import rootReducer from "./rootReducer";

const reduxStore = configureStore({
  reducer: rootReducer,
});

export function setupStore(preloadedState?: PreloadedState<RootState>) {
  return configureStore({
    reducer: rootReducer,
    preloadedState,
  });
}

export default reduxStore;

export type RootState = ReturnType<typeof reduxStore.getState>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore["dispatch"];
