import { connect } from "react-redux"
import CreditCard from "./CreditCard"

const mapStateToProps = ({ cardNumber, cardHolder, validThru }) => ({
  cardNumber,
  cardHolder,
  validThru
})

export default connect(mapStateToProps)(CreditCard)
