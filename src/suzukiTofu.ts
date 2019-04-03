export const buyTofu = (cost:number, box:string) => {
  let boxObj = { mon: 0, monme: 0, sum: 0, min: 0 } 
  const boxArr = box.split(" ")
  for(let item of boxArr){
    if (item === "mon" || item === "monme"){
      boxObj[item]++ 
    }
  }
  if (cost < 60 && boxObj.mon < cost || ((boxObj.monme * 60) + boxObj.mon) < cost){
    return "leaving the market"
  } else {
    const minMonme = Math.floor(cost/60) <= boxObj.monme ? 
      Math.floor(cost/60) +(cost % 60)
      : (cost - (boxObj.monme * 60)) + boxObj.monme
    return [boxObj.mon, boxObj.monme, (boxObj.monme * 60) + boxObj.mon,  minMonme]
  }
}