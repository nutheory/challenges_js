export const thirt = (n:number) => {
  const div = [1, 10, 9, 12, 3, 4]
  let nArr = []
  let newNum = n
  let acc = 0
  let divPos = 0
  while (true){
    nArr = newNum.toString().split("").reverse()
    for(let idx = 0; idx < nArr.length; idx++){
      acc = acc + parseInt(nArr[idx]) * div[divPos]
      divPos === div.length - 1 ? divPos = 0 : divPos++
    }
    if (newNum === acc) { break }
    newNum = acc
    acc = 0 
    divPos = 0
  }
  return acc
}