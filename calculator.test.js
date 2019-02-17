const expect = require("./expect");
const calc = require("./calculator");

const sum = calc.add(1, 2);
expect(sum).toBe(3);
