// The battlefield string consists of only small letters, #,[ and ].

// The nuclear shelter is represented by square brackets []. The letters 
// inside the square brackets represent letters inside the shelter.

// The # means a place where nuclear strike hit the battlefield. If there 
// is at least one # on the battlefield, all letters outside of shelter die. 
// When there is no any # on the battlefield, all letters survive (but do not 
// expect such scenario too often ;-P ).

// The shelters have some durability. When 2 or more # hit close to the shelter, 
// the shelter is destroyed and all letters inside evaporate. The 'close to the shelter' 
// means on the ground between the shelter and the next shelter (or beginning/end 
// of battlefield). The below samples make it clear for you.

// abde[fgh]ijk     => "abdefghijk"  (all letters survive because there is no # )
// [a][b][c]    => "abc"
// ab#de[fgh]ijk    => "fgh" (all letters outside die because there is a # )
// ab#de[fgh]ij#k   => ""  (all letters dies, there are 2 # close to the shellter )
// ##abde[fgh]ijk   => ""  (all letters dies, there are 2 # close to the shellter )
// ##abde[fgh]ijk[mn]op => "mn" (letters from the second shelter survive, there is no # close)
// #ab#de[fgh]ijk[mn]op => "mn" (letters from the second shelter survive, there is no # close)
// #abde[fgh]i#jk[mn]op => "mn" (letters from the second shelter survive, there is only 1 # close)
// [a]#[b]#[c]  => "ac"
// [a]#b#[c][d] => "d"
// ##a[a]b[c]#  => "c"

const getSurvivors = (bf:string) => {
  const strArr = bf.match(/\[(.*?)\]/g)
  return strArr ? strArr[0].slice(1, -1) : bf
}

export const alphabetWar = (battlefield:string) => {
  let survivors = ""
  if(!battlefield.includes("#")){ return battlefield.replace(/[\][]/g, '') }
  if([...battlefield].filter((chr:string) => chr === "#").length === 1){
    const bunkers = battlefield.match(/\[(.*?)\]/g) 
    if (bunkers === null){ return false }
    for(let idx = 0; idx < bunkers.length; idx++){
      survivors = survivors + getSurvivors(bunkers[idx])
    }
    return survivors
  }

  const bunkersBombs = battlefield.match(/#|\[(.*?)\]/g)
  let bunkerIndexes:Array<number> = [0]

  if (bunkersBombs === null){ return false }
  for(let i = 0; i < bunkersBombs.length; i++){
    if(bunkersBombs && bunkersBombs[i] !== '#'){ bunkerIndexes.push(i) }
  }
  let leftBombs = 0
  let rightBombs = 0
  for(let idx = 0; idx < bunkerIndexes.length; idx++){
    if(idx > 0){
      leftBombs = idx > 1 ? bunkerIndexes[idx] - (bunkerIndexes[idx - 1] + 1)
      : bunkerIndexes[idx] - bunkerIndexes[idx - 1]
      rightBombs = bunkerIndexes[idx + 1] > 0 ? 
        bunkerIndexes[idx + 1] - (bunkerIndexes[idx] + 1)
        : bunkersBombs.length - (bunkerIndexes[idx]+1)
      if ((leftBombs + rightBombs) < 2){
        survivors = survivors + getSurvivors(bunkersBombs[bunkerIndexes[idx]])
      }
    }
  }
  return survivors
}
