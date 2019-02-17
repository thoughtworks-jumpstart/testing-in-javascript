const calc = require("./calculator");

test('adds two numbers correctly', () => {
  const sum = calc.add(1, 2);
  expect(sum).toBe(3);
})
