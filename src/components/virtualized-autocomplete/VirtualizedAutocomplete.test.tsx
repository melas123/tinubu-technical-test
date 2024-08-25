import { render } from "@testing-library/react";
import { vi } from "vitest";
import VirtualizedAutocomplete from "./VirtualizedAutocomplete";

vi.mock("react-i18next", () => ({
  useTranslation: () => ({ t: (key: string) => key }),
}));
describe("VirtualizedAutocomplete", () => {
  it("should render without throwing", () => {
    expect(() =>
      render(
        <VirtualizedAutocomplete
          onAdd={() => {}}
          onSelect={() => {}}
          options={[]}
          value={null}
        />
      )
    ).not.toThrow();
  });
});
