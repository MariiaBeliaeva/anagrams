const isAnagrams = require("./index");

describe("Anagrams", () => {
  test("Function should return true if strings are anagrams", () => {
    expect(isAnagrams("finder", "FRienD")).toBe(true);
    expect(isAnagrams("hello", "world")).toBe(false);
    expect(isAnagrams("melon", "lemon")).toBeTruthy;
    expect(isAnagrams("abcde2", "c2abed")).toBe(true);
    expect(isAnagrams("kilso", "osilk")).toBe(true);
  });

  test("Function should be defined", () => {
    expect(isAnagrams).toBeDefined();
  });
});
