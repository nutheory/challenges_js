import { highlight } from '../src/roboscript_one'

describe("Your Syntax Highlighter", () => {
  it("should work for the examples provided in the description", () => {
    console.log("Code without syntax highlighting: F3RF5LF7");
    console.log("Your code with syntax highlighting: " + highlight("F3RF5LF7"));
    console.log("Expected syntax highlighting: <span style=\"color: pink\">F</span><span style=\"color: orange\">3</span><span style=\"color: green\">R</span><span style=\"color: pink\">F</span><span style=\"color: orange\">5</span><span style=\"color: red\">L</span><span style=\"color: pink\">F</span><span style=\"color: orange\">7</span>");
    expect(highlight("F3RF5LF7")).toBe("<span style=\"color: pink\">F</span><span style=\"color: orange\">3</span><span style=\"color: green\">R</span><span style=\"color: pink\">F</span><span style=\"color: orange\">5</span><span style=\"color: red\">L</span><span style=\"color: pink\">F</span><span style=\"color: orange\">7</span>");
    console.log("Code without syntax highlighting: FFFR345F2LL");
    console.log("Your code with syntax highlighting: " + highlight("FFFR345F2LL"));
    console.log("Expected syntax highlighting: <span style=\"color: pink\">FFF</span><span style=\"color: green\">R</span><span style=\"color: orange\">345</span><span style=\"color: pink\">F</span><span style=\"color: orange\">2</span><span style=\"color: red\">LL</span>");
    expect(highlight("FFFR345F2LL")).toBe("<span style=\"color: pink\">FFF</span><span style=\"color: green\">R</span><span style=\"color: orange\">345</span><span style=\"color: pink\">F</span><span style=\"color: orange\">2</span><span style=\"color: red\">LL</span>");
  })
})