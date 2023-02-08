import React, { PropsWithChildren, ReactElement } from "react";
import { render, RenderOptions } from "@testing-library/react";
import { Action, AnyAction, configureStore, PreloadedState } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import rootReducer from "../app/rootReducer";
import { AppStore, RootState } from "../app/reduxStore";

interface ExtendedRenderOptions extends Omit<RenderOptions, "queries"> {
  preloadedState?: PreloadedState<RootState>;
  store?: AppStore;
}

export function renderWithProviders(
  ui: ReactElement,
  { preloadedState = {}, ...renderOptions }: ExtendedRenderOptions = {},
) {
  const store = configureStore({
    reducer: rootReducer,
    preloadedState,
  });

  const dispatchedActions: AnyAction[] = [];
  const originalDispatch = store.dispatch;
  store.dispatch = <T extends Action>(action: T): T => {
    dispatchedActions.push(action);
    return originalDispatch(action);
  };

  function Wrapper({ children }: PropsWithChildren<object>): JSX.Element {
    return <Provider store={store}>{children}</Provider>;
  }

  return { dispatchedActions, store, ...render(ui, { wrapper: Wrapper, ...renderOptions }) };
}
