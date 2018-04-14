import { chunk } from "lodash"

const normalizeValidThru = validThru => {
  validThru = validThru.replace(/[^0-9]/g, "").slice(0, 4)
  const [month = 0, year = 0] = chunk(validThru, 2)
    .map(arr => arr.join(""))
    .map(Number)

  // console.log("month", month, "validThru", validThru)

  let result = Math.min(month, 12) + "" + Math.min(year, 50)
  if (validThru === "0") return "0"
  if (validThru === "1") return "1"
  if (validThru === "00") return "01"
  // console.log('result feha' , result)
  // console.log('the return is',result.slice(0, validThru.length))

  if (validThru.indexOf("00") === 0) {
    return (
      validThru[0] + "1" + Math.min(validThru.slice(2, validThru.length), 50)
    )
  }

  if (
    validThru < 10 &&
    (validThru.length < 3 || validThru[0] === "0") &&
    validThru.length > 1
  ) {
    result = "0" + result.slice(0, validThru.length)[0]
    // console.log('im in')
    // console.log(result.slice(0, validThru.length))
    return result
  }
  if (validThru.indexOf("0") === 0) {
    return (
      "0" + validThru[1] + Math.min(validThru.slice(2, validThru.length), 50)
    )
  }

  return result.slice(0, validThru.length)
}

const validThru = (state = "", { type, value }) => {
  switch (type) {
    case "SET_VALID_THRU":
      return normalizeValidThru(value)
    default:
      return state
  }
}
export default validThru
