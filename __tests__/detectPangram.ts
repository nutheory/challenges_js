import { isPangram } from '../src/detectPangram'

describe("Detect Pangram", () => {
  it("Success", () => {
    const stringOne = "The quick brown fox jumps over the lazy dog."
    expect(isPangram(stringOne)).toBe(true)
  })

  it("Fail", () => {
    const stringTwo = "This is not a pangram."
    expect(isPangram(stringTwo)).toBe(false)
  })
})