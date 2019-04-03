import { alphabetWar } from '../src/alphabetWars'


describe("Trumps Mid-East plan", () => {
  it("It begins", () => {
    expect(alphabetWar('abde[fgh]ijk')).toBe('abdefghijk')
    expect(alphabetWar('ab#de[fgh]ijk')).toBe('fgh')
    expect(alphabetWar('[a][b][c]')).toBe('abc')
    expect(alphabetWar('abcde[fgh]')).toBe('abcdefgh') 
  })

  it("It gets worse", () => {
    expect(alphabetWar('ab#de[fgh]ij#k')).toBe('')
    expect(alphabetWar('##abde[fgh]ijk')).toBe('')
    expect(alphabetWar('##abde[fgh]')).toBe('')
    expect(alphabetWar('##abcde[fgh]')).toBe('')
    expect(alphabetWar('##abde[fgh]ijk[mn]op')).toBe('mn')
  })

  it("Armageddon", () => {
    expect(alphabetWar('w#b[de]jfz[mfb]aj')).toBe('demfb')
    expect(alphabetWar('#abde[fgh]i#jk[mn]op')).toBe('mn')
    expect(alphabetWar('[ab]adfd[dd]##[abe]dedf[ijk]d#d[h]#')).toBe('abijk')
    expect(alphabetWar('[a]#[b]#[c]')).toBe('ac')
    expect(alphabetWar('[a]#b#[c][d]')).toBe('d')
    expect(alphabetWar('##a[a]b[c]#')).toBe('c')
  })
})