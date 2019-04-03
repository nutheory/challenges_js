export function bouncingBall(h:number, bounce:number, window:number) {
  let bounceCount = 1
  let bounceHeight = (bounce*100)/100 * h
  for(bounceCount; bounceHeight > window; bounceCount = bounceCount + 2){
    bounceHeight = (bounce*100)/100 * bounceHeight
  }
  return bounceCount
}