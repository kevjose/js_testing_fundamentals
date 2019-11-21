/**
 * usage for global `node -r ./lessons/setup-global.js ./lessons/use-global-test-framework.js`
 */

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
