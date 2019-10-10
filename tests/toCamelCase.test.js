const toCamelCase = require("../src/toCamelCase.js");

test("Example #1", () => {
  expect(toCamelCase("the-stealth-warrior")).toBe("theStealthWarrior");
});
test("Example #2", () => {
  expect(toCamelCase("The_Stealth_Warrior")).toBe("TheStealthWarrior");
});
test("Empty string", () => {
  expect(toCamelCase("")).toBe("");
});
test("Double underscore", () => {
  expect(toCamelCase("the__warrior")).toBe("theWarrior");
});
