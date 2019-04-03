const changeDir = (oldDir:string, newDir:string) => {
  if(oldDir === "r" && newDir === "L"){ return "u" }
  if(oldDir === "r" && newDir === "R"){ return "d" }
  if(oldDir === "u" && newDir === "L"){ return "l" }
  if(oldDir === "u" && newDir === "R"){ return "r" }
  if(oldDir === "l" && newDir === "L"){ return "d" }
  if(oldDir === "l" && newDir === "R"){ return "u" }
  if(oldDir === "d" && newDir === "L"){ return "r" }
  if(oldDir === "d" && newDir === "R"){ return "l" }
  return "r"
}


export const execute = (code:string) => {
  let dir = "r"
  let y = 0
  let x = 0
  let path = code.split("").reduce((acc:string[], val:string) => {
    if(val === "F"){
      if(dir === "r" || dir === "l"){
        x += 1
        acc.push("*")
      } 
      else { 
        acc.push("\r\n*")
      }
    } else if(val === "L" || val === "R"){
      dir = changeDir(dir, val)
    }

    return acc
  }, ["*"])
  console.log(path.join(""))
  return path.join("")
}

// expect(execute("")).toBe("*")
// expect(execute("FFFFF")).toBe("******")
// expect(execute("FFFFFLFFFFFLFFFFFLFFFFFL")).toBe("******\r\n*    *\r\n*    *\r\n*    *\r\n*    *\r\n******")
// expect(execute("LFFFFFRFFFRFFFRFFFFFFF")).toBe("    ****\r\n    *  *\r\n    *  *\r\n********\r\n    *   \r\n    *   ")
// expect(execute("LF5RF3RF3RF7")).toBe("    ****\r\n    *  *\r\n    *  *\r\n********\r\n    *   \r\n    *   ")