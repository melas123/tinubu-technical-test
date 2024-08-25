import { render } from "@testing-library/react";
import ListboxComponent from "./ListboxComponent";

describe("ListboxComponent", () => {
  it("should render without throwing", () => {
    expect(() =>
      render(<ListboxComponent children={[]} role="listbox" />)
    ).not.toThrow();
  });
});
