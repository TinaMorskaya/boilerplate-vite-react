import React, { PropsWithChildren, ReactElement } from "react";
import { render, RenderOptions } from "@testing-library/react";
import { Action, AnyAction, configureStore, PreloadedState } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import rootReducer from "../app/rootReducer";
import { AppStore, RootState } from "../app/reduxStore";
import { QueryClient, QueryClientProvider } from "react-query";

interface ExtendedRenderOptions extends Omit<RenderOptions, "queries"> {
  preloadedState?: PreloadedState<RootState>;
  route?: string;
  store?: AppStore;
}

export function renderWithProviders(
  ui: ReactElement,
  { preloadedState = {}, route = "/", ...renderOptions }: ExtendedRenderOptions = {},
) {
  const store = configureStore({
    reducer: rootReducer,
    preloadedState,
  });
  window.history.pushState({}, "Test page", route);
  const dispatchedActions: AnyAction[] = [];
  const originalDispatch = store.dispatch;
  store.dispatch = <T extends Action>(action: T): T => {
    dispatchedActions.push(action);
    return originalDispatch(action);
  };
  const queryClient = new QueryClient();

  function Wrapper({ children }: PropsWithChildren<object>): JSX.Element {
    return (
      <QueryClientProvider client={queryClient}>
        <Provider store={store}>{children}</Provider>
      </QueryClientProvider>
    );
  }

  return { dispatchedActions, store, ...render(ui, { wrapper: Wrapper, ...renderOptions }) };
}
