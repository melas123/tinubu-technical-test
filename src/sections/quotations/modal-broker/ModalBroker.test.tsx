import { render } from "@testing-library/react";
import ModalBroker from "./ModalBroker";

describe("ModalBroker", () => {
  it("should render without throwing", () => {
    expect(() => render(<ModalBroker />)).not.toThrow();
  });
});
