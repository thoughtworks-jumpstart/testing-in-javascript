function expect(actual) {
  return {
    toBe: expected => {
      if (actual !== expected) {
        throw new Error(
          `FAILED: Expected ${expected}, but got ${actual} instead`
        );
      } else {
        console.log("PASSED");
      }
    }
  };
}

module.exports = expect;
