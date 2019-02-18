const calc = require("./calculator");

describe("Calculator", () => {
  test("adds two numbers correctly", () => {
    expect(calc.add(2, 5)).toBe(7);
  });

  test("subtracts 1 from 3 and returns 2", () => {
    expect(calc.subtract(3, 1)).toBe(2);
  });

  test("subtracts 1 from 5 and returns 4", () => {
    expect(calc.subtract(5, 1)).toBe(4);
  });

  test("throws when a is not a number", () => {
    const error = new Error("Only numbers are allowed");
    expect(() => {
      calc.subtract("invalid", 1);
    }).toThrow(error);
  });

  test("throws when b is not a number", () => {
    const error = new Error("Only numbers are allowed");
    expect(() => {
      calc.subtract(1, NaN);
    }).toThrow(error);
  });
});
