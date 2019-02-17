const calc = require('./calculator')

function expect(actual, expected) {
  if (actual !== expected) {
    throw new Error('FAILED')
  } else {
    console.log('PASSED')
  }
}

const sum = calc.add(1, 2)
expect(sum, 3)
