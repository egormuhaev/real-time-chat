import { testFunc } from "./classNames";

describe("test", () => {
  test("good", () => {
    expect(testFunc(2)).toBe(4);
  });
});
