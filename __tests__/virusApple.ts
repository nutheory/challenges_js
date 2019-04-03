import { sc } from '../src/virusApple'

describe("Basic Tests", function(){ 
  it("OnE", function(){
    var apple=[
    ["A","A","A","A","A"],
    ["V","A","A","A","A"],
    ["A","A","A","A","A"],
    ["A","A","A","A","A"],
    ["A","A","A","A","A"]
    ],n=0,
    answer=[
    ["A","A","A","A","A"],
    ["V","A","A","A","A"],
    ["A","A","A","A","A"],
    ["A","A","A","A","A"],
    ["A","A","A","A","A"]
    ];

    expect(sc(apple,n)).toEqual(answer)
  })
  it("TwO", function(){
    var apple=[
    ["A","A","A","A","A"],
    ["V","A","A","A","A"],
    ["A","A","A","A","A"],
    ["A","A","A","A","A"],
    ["A","A","A","A","A"]
    ],n=1,
    answer=[
    ["V","A","A","A","A"],
    ["V","V","A","A","A"],
    ["V","A","A","A","A"],
    ["A","A","A","A","A"],
    ["A","A","A","A","A"]
    ];

    expect(sc(apple,n)).toEqual(answer)
  })
  
  it("ThREE", function(){
    var apple=[
    ["A","A","A","A","A"],
    ["V","A","A","A","A"],
    ["A","A","A","A","A"],
    ["A","A","A","A","A"],
    ["A","A","A","A","A"]
    ],n=2,
    answer=[
    ["V","V","A","A","A"],
    ["V","V","V","A","A"],
    ["V","V","A","A","A"],
    ["V","A","A","A","A"],
    ["A","A","A","A","A"]
    ];

    expect(sc(apple,n)).toEqual(answer)
  })

  it("FoUR", function(){
    var apple=[
    ["A","A","A","A","A"],
    ["A","A","A","A","A"],
    ["A","A","V","A","A"],
    ["A","A","A","A","A"],
    ["A","A","A","A","A"]
    ],n=1,
    answer=[
    ["A","A","A","A","A"],
    ["A","A","V","A","A"],
    ["A","V","V","V","A"],
    ["A","A","V","A","A"],
    ["A","A","A","A","A"]
    ];

    expect(sc(apple,n)).toEqual(answer)
  })
  it("FiVE", function(){
    var apple=[
    ["A","A","A","A","A"],
    ["A","A","A","A","A"],
    ["A","A","V","A","A"],
    ["A","A","A","A","A"],
    ["A","A","A","A","A"]
    ],n=2,
    answer=[
    ["A","A","V","A","A"],
    ["A","V","V","V","A"],
    ["V","V","V","V","V"],
    ["A","V","V","V","A"],
    ["A","A","V","A","A"]
    ];

    expect(sc(apple,n)).toEqual(answer)
  })
  it("SiX", function(){
    var apple=[
    ["A","A","A","A","A"],
    ["A","A","A","A","A"],
    ["A","A","V","A","A"],
    ["A","A","A","A","A"],
    ["A","A","A","A","A"]
    ],n=3,
    answer=[
    ["A","V","V","V","A"],
    ["V","V","V","V","V"],
    ["V","V","V","V","V"],
    ["V","V","V","V","V"],
    ["A","V","V","V","A"]
    ];

    expect(sc(apple,n)).toEqual(answer)
  })
  it("SeVEN", function(){
    var apple=[
    ["A","A","A","A","A"],
    ["A","A","A","A","A"],
    ["A","A","V","A","A"],
    ["A","A","A","A","A"],
    ["A","A","A","A","A"]
    ],n=4,
    answer=[
    ["V","V","V","V","V"],
    ["V","V","V","V","V"],
    ["V","V","V","V","V"],
    ["V","V","V","V","V"],
    ["V","V","V","V","V"]
    ];

    expect(sc(apple,n)).toEqual(answer)
  })
})