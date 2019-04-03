import { wave } from '../src/wave'

describe("Wave tests", () => {
  it('wave("hello")', () => {
    expect(wave("hello")).toEqual(expect.arrayContaining(["Hello", "hEllo", "heLlo", "helLo", "hellO"]))
  })

  it('wave("codewars")', () => {
    expect(wave("codewars")).toEqual(expect.arrayContaining(["Codewars", "cOdewars", "coDewars", "codEwars", "codeWars", "codewArs", "codewaRs", "codewarS"]))
  })
  
  it('wave("codewars")', () => {
    expect(wave("")).toEqual(expect.arrayContaining([]))
  })

  it('wave("two words")', () => {
    expect(wave("two words")).toEqual(expect.arrayContaining(["Two words", "tWo words", "twO words", "two Words", "two wOrds", "two woRds", "two worDs", "two wordS"]))
  })

  it('wave("codewars")', () => {
    expect(wave(" gap ")).toEqual(expect.arrayContaining([" Gap ", " gAp ", " gaP "]))
  })
})


// result = ["Two words", "tWo words", "twO words", "two Words", "two wOrds", "two woRds", "two worDs", "two wordS"];
// Test.assertDeepEquals(wave("two words")).toBe(result, "Should return: '"+result+"'");

// result = [" Gap ", " gAp ", " gaP "];
// Test.assertDeepEquals(wave(" gap ")).toBe(result, "Should return: '"+result+"'");