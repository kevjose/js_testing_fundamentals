const { asyncSum, asyncSubtract } = require("../math");

test("sum adds numbers", async () => {
  const result = await asyncSum(7, 3);
  const expected = 10;
  expect(result).toBe(expected);
});

test("subtract subtracts numbers", async () => {
  const result = await asyncSubtract(2, 1);
  const expected = 1;
  expect(result).toBe(expected);
});

async function test(title, callback) {
  try {
    await callback();
    console.log(title);
  } catch (e) {
    console.error(title);
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
