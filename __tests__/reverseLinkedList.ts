import { reverseList, prepend, head, tail } from '../src/reverseLinkedList' 

describe("reverses linked lists", () => {
  it("responds with null for null", () => {
    expect(reverseList(null)).toEqual(null)
  })  

  it("is reversed", () => {
    expect(reverseList([1, [2, [3, null]]])).toEqual([3, [2, [1, null]]])
  })

  it("prepends number 4", () => {
    expect(prepend(4, [1, [2, [3, null]]])).toEqual([4, [1, [2, [3, null]]]])
  })

  it("returns head", () => {
    expect(head([1, [2, [3, null]]])).toBe(1)
  })

  it("returns tail", () => {
    expect(tail([1, [2, [3, null]]])).toEqual([2, [3, null]])
  })
})
// expect(reverseList(null)).toBe(null)
// expect(reverseList([1, [2, [3, null]]])).toBe([3, [2, [1, null]]])