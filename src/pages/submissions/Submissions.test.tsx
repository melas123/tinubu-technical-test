import { render } from "@testing-library/react";
import Submissions from "./Submissions";

describe("Submissions", () => {
  it("should render without throwing", () => {
    expect(() => render(<Submissions />)).not.toThrow();
  });
});
