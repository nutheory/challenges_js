export const meeting = (s:string) => {
  let contactArr = s.toUpperCase().split(";").map(cnt => cnt.split(":"))
    .sort((a:any, b:any) => {
      if(a[1] === b[1]){
        return a[0].localeCompare(b[0])
      } else {
        return a[1].localeCompare(b[1])
      }
    })
  let fin = ""
  for(let cnt of contactArr){
    fin = fin + `(${cnt[1]}, ${cnt[0]})`
  }
  return fin
}