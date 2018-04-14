import React from "react"
import { chunk, noop } from "lodash"

import "./CreditCardForm.css"

const renderCardNumber = cardNumber =>
  chunk(cardNumber, 4)
    .map(s => s.join(""))
    .join(" ")

const renderValidThru = validThru =>
  validThru.length < 3
    ? validThru
    : validThru.slice(0, 2) + " / " + validThru.slice(2, 4)

const CreditCardForm = ({
  cardHolder,
  cardNumber,
  validThru,
  onChangeCardHolder = noop,
  onChangeCardNumber = noop,
  onChangeValidThru = noop
}) => (
  <div className="credit-card-form">
    <div className="credit-card-form__row">
      <input
        className="credit-card-form__input"
        type="text"
        placeholder="Card Number"
        value={renderCardNumber(cardNumber)}
        onChange={e => onChangeCardNumber(e.target.value)}
      />
    </div>
    <div className="credit-card-form__row">
      <input
        className="credit-card-form__input"
        type="text"
        placeholder="Name"
        value={cardHolder}
        onChange={e => onChangeCardHolder(e.target.value)}
      />
    </div>
    <div className="credit-card-form__row">
      <input
        className="credit-card-form__input credit-card-form__input--2-thirds"
        type="text"
        placeholder="Valid Thru"
        value={renderValidThru(validThru)}
        onChange={e => onChangeValidThru(e.target.value)}
      />
    </div>
  </div>
)

export default CreditCardForm
