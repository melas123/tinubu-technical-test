import { render } from "@testing-library/react";
import Dashboard from "./Dashboard";

describe("Dashboard", () => {
  it("should render without throwing", () => {
    expect(() => render(<Dashboard />)).not.toThrow();
  });
});
