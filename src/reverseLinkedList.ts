export const reverseList = (list:any) => {
  let node = null



  
  while (list)
  {
    node = [list[0], node]
    list = list[1]
  }
  return node
}

export const prepend = (val:number, list:any) => [val, list] 

export const head = (list:any) => list[0] 

export const tail = (list:any) => list[1] 