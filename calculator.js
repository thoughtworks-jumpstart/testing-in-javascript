class Calculator {
  constructor() {}

  add(a, b) {
    return a + b;
  }

  subtract(a, b) {
    if (isNaN(a) || isNaN(b)) {
      throw new Error("Only numbers are allowed");
    }
    if (typeof a !== "number" || typeof b !== "number") {
      throw new Error("Only numbers are allowed");
    }
    return a - b;
  }
}

module.exports = new Calculator();
