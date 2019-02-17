const assert = require('assert')

function expect(actual) {
  return {
    toBe: expected => {
      try {
        assert.equal(actual, expected)
        console.log('🎉 PASSED')
      } catch (e) {
        console.error(`🙅‍♀️ FAILED: Expected ${e.expected}, but got ${e.actual}`)
      }
    }
  };
}

module.exports = expect;
