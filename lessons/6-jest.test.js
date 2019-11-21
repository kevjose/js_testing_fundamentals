/**
 * add jest as dev dependancy `npm init -y && npm i --save-dev jest`
 * `npm run test` after configuring script test to jest as in package.json
 */

const { asyncSum, asyncSubtract } = require("../math");

test("sumAsync adds numbers asynchronously", async () => {
  const result = await asyncSum(3, 7);
  const expected = 10;
  expect(result).toBe(expected);
});

test("subtractAsync subtracts numbers asynchronously", async () => {
  const result = await asyncSubtract(7, 3);
  const expected = 4;
  expect(result).toBe(expected);
});
