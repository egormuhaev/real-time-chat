import { Button } from "./Button";
import { render, screen } from "@testing-library/react";

describe("Button", () => {
  test("render", () => {
    render(<Button>Test</Button>);
    expect(screen.getByText("Test")).toBeInTheDocument();
  });

  test("Button have size class small", () => {
    render(<Button size="small">Test</Button>);
    expect(screen.getByText("Test")).toHaveClass("small");
  });
});
