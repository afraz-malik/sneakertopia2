import React from 'react'
import HomePage from './pages/HomePage/HomePage'
import './App.css'
import Compare from './pages/Compare/Compare'
import { Route, HashRouter as Router, Switch } from 'react-router-dom'
import ProductDetails from './pages/ProductDetails/ProductDetails'
function App() {
  return (
    <Router base>
      <Switch>
        <Route exact path="/" component={HomePage} />
        {/* <Route exact path="/compare" component={Compare} />
        <Route exact path="/details" component={ProductDetails} /> */}
      </Switch>
    </Router>
  )
}

export default App
