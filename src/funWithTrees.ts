export class TreeNode{
  value:any | null | undefined
  left:any | null | undefined 
  right:any | null | undefined 
  constructor(value:any, left:any = null, right:any = null){
    this.value = value
    this.left = left
    this.right = right
  }
}

export class ListNode{
  data:number
  next:any | null | undefined
  constructor(data:number , next:any = null){
    this.data = data
    this.next = next
  }
}

export function flatten(root:any |null){
  if(root === null){ return null }
  let values:any = new Set()
  const trees = [root]
  while (trees.length) {
    const tree = trees.pop()
    let head = tree.value
    while (head) {
        values.add(head.data)
        head = head.next
    }
    if (tree.left) trees.push(tree.left)
    if (tree.right) trees.push(tree.right)
  }
  values = Array.from(values).sort((a:any, b:any) => a - b);
  return values.reduceRight((a:null, b:number) => new ListNode(b, a)).toBe(null)
}