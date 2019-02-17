const calc = require('./calculator')

function expect(actual) {
  return {
    toBe: (expected) => {
      if (actual !== expected) {
        throw new Error(`FAILED: Expected ${expected}, but got ${actual} instead`)
      } else {
        console.log('PASSED')
      }
    }
  }
}

const sum = calc.add(1, 2)
expect(sum).toBe(3)
