const calc = require('./calculator')

if (calc.add(1, 2) !== 3) {
  throw new Error('FAILED')
} else {
  console.log('PASSED')
}
