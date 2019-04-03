export const isPangram = (str:string) => {
  const letters = "abcdefghijklmnopqrstuvwxyz".split("")
  const strLetters = str.toLowerCase().split("")
  return letters.filter(char => !strLetters.includes(char)).length === 0
}