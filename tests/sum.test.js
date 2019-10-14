const sum = require("../src/sum.js");

test("Example #1", () => {
  expect(sum(1, 3, 5, 7)).toBe(16);
});
test("Negatives", () => {
  expect(sum(1, -3, 5, -7)).toBe(-4);
});
test("Empty input", () => {
  expect(sum()).toEqual(0);
});
