export const travel = (r:string, zipcode:string) => {
  const addrArr = r.split(",").filter(addr => addr.includes(zipcode))
  const addresses = addrArr.map(addr => addr.split(" ", 1)[0]).join(",")
  const streets = addrArr.map(addr => addr.split(" ")
    .filter((a,i) => i !== 0).join(" ").split(` ${zipcode}`)[0]).join(",")
  return `${zipcode}:${streets}/${addresses}`
}