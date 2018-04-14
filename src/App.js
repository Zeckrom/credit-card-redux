import React from "react"
import CreditCard from "./components/CreditCard"
import CreditCardForm from "./components/CreditCardForm"
import { Provider } from "react-redux"
import store from "./store"
import "./App.css"

const App = () => (
  <Provider store={store}>
    <div className="app-container">
      <div className="app-content-item">
        <CreditCard />
      </div>
      <div className="app-content-item">
        <CreditCardForm />
      </div>
    </div>
  </Provider>
)

export default App
