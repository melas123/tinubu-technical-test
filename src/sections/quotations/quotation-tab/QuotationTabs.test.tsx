import { render } from "@testing-library/react";
import QuotationTabs from "./QuotationTabs";

describe("QuotationTabs", () => {
  it("should render without throwing", () => {
    expect(() => render(<QuotationTabs />)).not.toThrow();
  });
});
