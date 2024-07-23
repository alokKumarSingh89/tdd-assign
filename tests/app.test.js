import { describe, expect, it } from "vitest";
import { add } from "../app";

describe("Sum of number from given string", () => {
  it("Return 0 for blank string", () => {
    const sum = add("");
    expect(sum).toBe(0);
  });
});
