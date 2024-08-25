import { render } from "@testing-library/react";
import AuditLog from "./AuditLog";

describe("AuditLog", () => {
  it("should render without throwing", () => {
    expect(() => render(<AuditLog />)).not.toThrow();
  });
});
