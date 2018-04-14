const normalizeCardHolder = cardHolder => cardHolder.slice(0, 15)

const cardHolder = (state = "", { type, value }) => {
  switch (type) {
    case "SET_CARD_HOLDER":
      return normalizeCardHolder(value)
    default:
      return state
  }
}
export default cardHolder
