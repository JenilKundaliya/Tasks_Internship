import React, { useEffect, useState } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import axios from 'axios'
import { Switch } from 'react-router-dom'
import { Route } from 'react-router-dom'
import HomeScreen from '../screens/HomeScreen'
import ProductScreen from '../screens/productScreen'
import Navbar from './Navbar'
import CartScreen from '../screens/CartScreen'
function App() {
useEffect(()=>{
 
})
    return (
      <Router>

      <div className='App'>
          <Navbar />
<Switch>
  <Route exact path="/" component={HomeScreen} />
  <Route exact path="/products/:id" component={ProductScreen} />
  <Route exact path="/cart" component={CartScreen} />
  <Route exact path="/cart/:id" component={CartScreen} />
</Switch>

      </div>
      </Router>
    )
}

export default App
