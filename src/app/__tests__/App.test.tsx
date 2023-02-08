import React from "react";
import { screen } from "@testing-library/react";

import App from "../App";
import { renderWithProviders } from "../../utils/test-utils";

const setup = () => {
  return renderWithProviders(<App />);
};

describe("<App />", () => {
  it("should render the App", () => {
    setup();
    expect(screen.getByText("Boilerplate")).toBeInTheDocument();
    expect(screen.getByTestId("counter-count")).toBeInTheDocument();
  });
});
