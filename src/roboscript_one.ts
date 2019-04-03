export const highlight = (code:string) => 
  code.replace(new RegExp(/[0-9]+/g), str => `<span style=\"color: orange\">${str}</span>`)
    .replace(new RegExp(/[F]+/g), str => `<span style=\"color: pink\">${str}</span>`)
    .replace(new RegExp(/[L]+/g), str => `<span style=\"color: red\">${str}</span>`)
    .replace(new RegExp(/[R]+/g), str => `<span style=\"color: green\">${str}</span>`)
