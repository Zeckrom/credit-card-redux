import { connect } from "react-redux"

import CreditCardFrom from "./CreditCardForm"

const mapStateToProps = ({ cardHolder, cardNumber, validThru }) => ({
  cardHolder,
  cardNumber,
  validThru
})

const mapDispatchToProps = dispatch => ({
  onChangeCardHolder: value =>
    dispatch({
      type: "SET_CARD_HOLDER",
      value
    }),
  onChangeCardNumber: value =>
    dispatch({
      type: "SET_CARD_NUMBER",
      value
    }),
  onChangeValidThru: value =>
    dispatch({
      type: "SET_VALID_THRU",
      value
    })
})

export default connect(mapStateToProps, mapDispatchToProps)(CreditCardFrom)
