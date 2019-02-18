class Calculator {
  constructor() {}

  isNumber(n) {
    return (typeof n === 'number' && !isNaN(n))
  }

  add(a, b) {
    return a + b;
  }

  subtract(a, b) {
    if (!this.isNumber(a) || !this.isNumber(b)) {
      throw new Error("Only numbers are allowed");
    }
    return a - b;
  }
}

module.exports = new Calculator();
