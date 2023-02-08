import React from "react";
import { fireEvent, screen } from "@testing-library/react";

import { renderWithProviders } from "../../../utils/test-utils";
import { Counter } from "../Counter";
import { RootState } from "../../reduxStore";
import { decrement, increment, incrementByAmount } from "../counterSlice";

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
  it("should render the Counter and increase value by 1 after clicking on increment button", () => {
    const { dispatchedActions } = setup();
    expect(dispatchedActions).not.toContainEqual(increment());
    const button = screen.getByTestId("counter-increment");
    const count = screen.getByTestId("counter-count");
    expect(count).toHaveTextContent("Count is 5");
    fireEvent.click(button);
    expect(dispatchedActions).toContainEqual(increment());
    expect(count).toHaveTextContent("Count is 6");
  });

  it("should decrease value by 1 after clicking on decrement button", () => {
    const { dispatchedActions } = setup();
    expect(dispatchedActions).not.toContainEqual(decrement());
    const button = screen.getByTestId("counter-decrement");
    const count = screen.getByTestId("counter-count");
    expect(count).toHaveTextContent("Count is 5");
    fireEvent.click(button);
    expect(dispatchedActions).toContainEqual(decrement());
    expect(count).toHaveTextContent("Count is 4");
  });

  it("should increase value by 10 after clicking on Increment by amount button", () => {
    const { dispatchedActions } = setup();
    const input = screen.getByTestId("counter-increment-by-amount-input");
    expect(dispatchedActions).not.toContainEqual(incrementByAmount(5));
    const okButton = screen.getByTestId("counter-increment-by-amount-button");
    const count = screen.getByTestId("counter-count");
    expect(count).toHaveTextContent("Count is 5");
    fireEvent.change(input, { value: 5 });
    fireEvent.click(okButton);
    expect(dispatchedActions).toContainEqual(incrementByAmount(5));
    expect(count).toHaveTextContent("Count is 10");
  });
});
