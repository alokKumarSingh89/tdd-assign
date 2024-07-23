import { describe, expect, it } from "vitest";
import { add } from "../app";

describe("Sum of number from given string", () => {
  it("Return 0 for blank string", () => {
    const sum = add("");
    expect(sum).toBe(0);
  });
  it("Return the number when string have single number", () => {
    const sum = add("1");
    expect(sum).toBe(1);
  });
  it("Return the sum of number when they are comma seperate", () => {
    let sum = add("1,2");
    expect(sum).toBe(3);
    expect(add("1,2,3,4")).toBe(10);
  });
  it("return the sum of number when they are comma and \n seperated", () => {
    expect(add("1\n2,3,4")).toBe(10);
  });
  it("Sum of number when have diffrent delimiter", () => {
    expect(add("//;\n1;2")).toBe(3);
  });
  it("throw the expection for negative number", () => {
    expect(() => add("-1,2")).toThrowError(/^negative numbers not allowed -1$/);
  });
});
