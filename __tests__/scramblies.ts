import { scramble } from '../src/scramblies'

describe('Example Tests', () => {
  it('Examples', () => {
    expect(scramble('rkqodlw','world')).toBe(true)
    expect(scramble('cedewaraaossoqqyt','codewars')).toBe(true)
    expect(scramble('katas','steak')).toBe(false)
    expect(scramble('scriptjava','javascript')).toBe(true)
    expect(scramble('scriptingjava','javascript')).toBe(true)
    expect(scramble('scriptsjava','javascripts')).toBe(true)
    expect(scramble('jscripts','javascript')).toBe(false)
    expect(scramble('aabbcamaomsccdd','commas')).toBe(true)
  })
})