const { largest, smallest } = require("../src/largestAndSmallest.js");

test("Example #1", () => {
  expect(largest(2, 0.1, -5, 100, 3)).toBe(100);
});
test("Example #2", () => {
  expect(smallest(2, 0.1, -5, 100, 3)).toBe(-5);
});
