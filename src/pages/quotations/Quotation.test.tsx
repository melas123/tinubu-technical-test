import { render } from "@testing-library/react";
import { vi } from "vitest";
import Quotations from "./Quotations";

vi.mock("react-i18next", () => ({
  useTranslation: () => ({ t: (key: string) => key }),
}));
describe("Quotations", () => {
  it("should render without throwing", () => {
    expect(() => render(<Quotations />)).not.toThrow();
  });
});
