import React from "react";
import { fireEvent, screen } from "@testing-library/react";

import { renderWithProviders } from "../../../utils/test-utils";
import { Counter } from "../Counter";
import { RootState } from "../../reduxStore";
import { increment } from "../counterSlice";

const setup = (preloadedState?: (state: RootState) => void) => {
  return renderWithProviders(<Counter />, {
    preloadedState: {
      counter: {
        counterValue: 5,
        ...preloadedState,
      },
    },
  });
};

describe("<Counter />", () => {
  it("should render the Counter", () => {
    const { dispatchedActions } = setup();
    expect(dispatchedActions).not.toContainEqual(increment());
    const button = screen.getByTestId("counter-increment");
    expect(button).toHaveTextContent("Increment. Count is 5");
    fireEvent.click(button);
    expect(dispatchedActions).toContainEqual(increment());
    expect(button).toHaveTextContent("Increment. Count is 6");
  });
});
