import { execute } from '../src/roboscript_two'

describe("Your RS1 Interpreter", () => {
  it("should work for the example tests provided in the description", function () {
    expect(execute("")).toBe("*")
    expect(execute("FFFFF")).toBe("******")
    expect(execute("FFFFFLFFFFFLFFFFFLFFFFFL")).toBe("******\r\n*    *\r\n*    *\r\n*    *\r\n*    *\r\n******")
    expect(execute("LFFFFFRFFFRFFFRFFFFFFF")).toBe("    ****\r\n    *  *\r\n    *  *\r\n********\r\n    *   \r\n    *   ")
    expect(execute("LF5RF3RF3RF7")).toBe("    ****\r\n    *  *\r\n    *  *\r\n********\r\n    *   \r\n    *   ")
  })
})