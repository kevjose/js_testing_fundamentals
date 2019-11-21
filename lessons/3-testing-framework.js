const { sum, subtract } = require("../math");

test("sum adds number", () => {
  const result = sum(7, 3);
  const expected = 10;
  expect(result).toBe(expected);
});

test("subtract subtracts numbers", () => {
  const result = subtract(2, 1);
  const expected = 1;
  expect(result).toBe(expected);
});

function test(title, callback) {
  try {
    callback();
    console.log(`✓ ${title}`);
  } catch (e) {
    console.error(`✕ ${title}`);
    console.error(e);
  }
}

function expect(actual) {
  return {
    toBe(expected) {
      if (actual !== expected) {
        throw new Error(`${actual} is not equal to ${expected}`);
      }
    }
  };
}
