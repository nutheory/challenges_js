function eachBounce()

function bouncingBall(h, bounce, window) {
  let bounceCount = 1
  let bounceHeight = (bounce*100)/100 * h)
  if(((bounce*100)/h) > window){
    bounceCount = bounceCount + 2
    console.log("Inner",bounceCount)
  }
  console.log("Outer",((bounce*100)/100 * h))
  return bounceCount
}

module.exports = ({ bouncingBall })