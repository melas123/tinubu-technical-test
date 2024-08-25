import { render } from "@testing-library/react";
import Policies from "./Policies";

describe("Policies", () => {
  it("should render without throwing", () => {
    expect(() => render(<Policies />)).not.toThrow();
  });
});
