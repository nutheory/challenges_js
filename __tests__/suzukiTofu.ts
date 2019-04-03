import { buyTofu } from '../src/suzukiTofu'

describe("Basic tests", () => {
  it("OnE", () => {
    var box = "mon monme", 
    cost = 5;
    expect(buyTofu(cost,box)).toEqual('leaving the market');
  })

  it("TwO", () => {
    var box = 'mon mon mon mon mon apple mon mon mon mon mon mon mon monme mon mon monme mon mon mon mon cloth monme mon mon mon mon mon mon mon mon cloth mon mon monme mon mon mon mon monme mon mon mon mon mon mon mon mon mon mon mon mon mon',
    cost = 124;
    expect(buyTofu(cost,box)).toEqual([45, 5, 345, 6]);
  })

  it("ThREE", () => {
    var box = 'mon mon mon',
    cost = 674;
    expect(buyTofu(cost,box)).toEqual('leaving the market');
  })

  it("FoUR", () => {
    var box = 'monme mon mon monme',
    cost = 1;
    expect(buyTofu(cost,box)).toEqual([2,2,122,1]);
  })

  it("FiVE", () => {
    var box = 'mon mon mon mon mon apple mon mon mon mon mon mon mon mon mon mon mon mon mon mon mon mon mon mon mon mon mon mon mon mon mon mon mon mon mon mon mon mon mon mon mon mon mon mon mon mon mon mon mon mon mon mon mon mon mon mon mon mon mon mon mon mon mon mon mon mon mon mon mon mon mon mon mon mon mon mon mon mon mon mon mon mon mon mon mon mon mon mon monme mon mon mon mon cloth mon mon mon mon mon mon mon mon mon cloth mon mon mon mon mon mon mon mon mon mon mon mon mon mon mon mon mon mon mon mon mon',
    cost = 124;
    expect(buyTofu(cost,box)).toEqual([121, 1, 181, 65]);
  })

  it("SiX", () => {
    var box = 'monme mon mon monme',
    cost = 122;
    expect(buyTofu(cost,box)).toEqual([2,2,122,4]);
  })
})