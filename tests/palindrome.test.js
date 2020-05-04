const palindrome = require("../utils/for_testing").palindrime;
test("palindrome of a", () => {
  const result = palindrome("a");
  expect(result).toBe("a");
});

test("palidrome of react", () => {
  const result = palindrome("react");
  expect(result).toBe("tcaer");
});

test("palindrome of releveler", () => {
  const result = palindrome("releveler");
  expect(result).toBe("releveler");
});
