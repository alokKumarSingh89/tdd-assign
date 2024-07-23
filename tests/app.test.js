import { describe, expect, it } from "vitest";
import { add } from "../app";

describe("Sum of number from given string", () => {
  it("Return 0 for blank string", () => {
    const sum = add("");
    expect(sum).toBe(0);
  });
  it("Return the number when string have 1 number", () => {
    const sum = add("1");
    expect(sum).toBe(1);
  });
});
