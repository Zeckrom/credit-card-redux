import React, { Component } from "react"
import "./CreditCard.css"

const logo =
  "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Mastercard-logo.svg/1200px-Mastercard-logo.svg.png"
const chipImage =
  "https://www.thebeneficial.com/portals/beneficialbankwebsite/images/chip.png"

const renderCardNumber = cardNumber => {
  const dots = Array.from(
    {
      length: 16 - cardNumber.length
    },
    () => "•"
  ).join("")
  return (cardNumber + dots)
    .match(/.{0,4}/g)
    .slice(0, -1)
    .join(" ")
}

const renderCardHolder = cardHolder =>
  cardHolder.toUpperCase() || "your name here".toUpperCase()

const renderValidThru = validThru => {
  const dots = Array.from(
    {
      length: 4 - validThru.length
    },
    () => "•"
  ).join("")
  return (validThru + dots)
    .match(/.{0,2}/g)
    .slice(0, -1)
    .join("/")
}

const CreditCard = ({ cardNumber = "", cardHolder = "", validThru = "" }) => (
  <div className="credit-card">
    <h1 className="company-name">Company name</h1>
    <img className="chip-image" src={chipImage} />
    <div className="card-info">
      <div className="card-info-text">
        <h2 className="credit-number">{renderCardNumber(cardNumber)}</h2>
        <h2 className="valid-thru">{renderValidThru(validThru)}</h2>
        <h2 className="card-holder">{renderCardHolder(cardHolder)}</h2>
      </div>
      <div className="card-info-logo">
        <img src={logo} />
      </div>
    </div>
  </div>
)

export default CreditCard
