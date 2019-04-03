import { bouncingBall } from '../src/bouncing'

describe("Tests", function(){
  it("test1", function(){
    expect(bouncingBall(3.0, 0.66, 1.5)).toBe(3);
  });
  
  it("test2", function(){
    expect(bouncingBall(30.0, 0.66, 1.5)).toBe(15);
  });  
})