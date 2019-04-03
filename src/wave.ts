export const wave = (str:string) =>
  str.split("").map((char, i) => 
    char !== " " ?
      str.split("").map((ic,idx) => 
        ic === char && i === idx ? ic.toUpperCase() : ic
      ).join("")
    : " " 
  ).filter(item => item !== " ")