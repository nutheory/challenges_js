export const noBoringZeros = (num:number) => 
  num < 0 ?
  parseInt(parseInt(num.toString().split("").reverse().join("")).toString().split("").reverse().join("")) * -1
  : parseInt(parseInt(num.toString().split("").reverse().join("")).toString().split("").reverse().join(""))
