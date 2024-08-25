import { render } from "@testing-library/react";
import QuotationHeader from "./QuotationHeader";

describe("QuotationHeader", () => {
  it("should render without throwing", () => {
    expect(() => render(<QuotationHeader />)).not.toThrow();
  });
});
