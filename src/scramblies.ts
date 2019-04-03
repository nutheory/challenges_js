export const scramble = (str1:string, str2:string) => {
  let charObj:any = {}
  let scramObj:any = {}
  str2.split("").forEach(e => charObj[e] = charObj[e] + 1 || 1 )
  str1.split("").forEach(e => scramObj[e] = scramObj[e] + 1 || 1 )
  return str2.split("").filter(val => scramObj[val] >= charObj[val] ? false : true).length === 0
}