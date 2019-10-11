const reverseWords = require("../src/reverseWords.js");

test("Example #1", () => {
  expect(reverseWords(" A fun little challenge! ")).toEqual(
    " A nuf elttil !egnellahc "
  );
});
test("Empty string", () => {
  expect(reverseWords("")).toEqual("");
});
