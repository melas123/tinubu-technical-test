import { render } from "@testing-library/react";
import Parties from "./Parties";

describe("Parties", () => {
  it("should render without throwing", () => {
    expect(() => render(<Parties />)).not.toThrow();
  });
});
