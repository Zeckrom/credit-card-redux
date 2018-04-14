const normalizeCardNumber = cardNumber =>
  cardNumber.replace(/[^0-9]/g, "").slice(0, 16)

const cardNumber = (state = "", { type, value }) => {
  switch (type) {
    case "SET_CARD_NUMBER":
      return normalizeCardNumber(value)
    default:
      return state
  }
}

export default cardNumber
