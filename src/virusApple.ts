export const sc = (apple:string[][], n:number) => {
  if(n === 0){ return apple }
  let vFinal:string[][] = apple

  for (let i = 0; i < n; i++){
    let v:number[][] = [] 
    apple.map((row, ri:number) => {
      row.map((col, ci:number) => {
        if (col === "V"){ v.push([ri, ci]) }
      })
    })
    for(let vi = 0; vi < v.length; vi++){
      vFinal[v[vi][0] - 1] ? vFinal[v[vi][0] - 1][v[vi][1]] = "V" : null
      vFinal[v[vi][1] + 1] ? vFinal[v[vi][0]][v[vi][1] + 1] = "V" : null
      vFinal[v[vi][0] + 1] ? vFinal[v[vi][0] + 1][v[vi][1]] = "V" : null
      vFinal[v[vi][1] - 1] ? vFinal[v[vi][0]][v[vi][1] - 1] = "V" : null
    }
  }
  return vFinal
}