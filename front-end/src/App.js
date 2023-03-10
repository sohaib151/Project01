import React from 'react'
import{BrowserRouter as Router ,Route,Routes} from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import {Container} from 'react-bootstrap'
import HomeScreen from './screens/HomeScreen'
import ProductScreen from './screens/ProductScreen'
import CartScreen from './screens/CartScreen'
const App = () => {
  return (
    <Router>
    <Header/>
    <Container>
      <main>
      <Routes>
        <Route path='/' element={<HomeScreen/>}/>
        <Route path='/product/:id' element={<ProductScreen/>}/>
        <Route path='/cart/:id' element={<CartScreen/>}/>
        <Route path='/cart' element={<CartScreen/>}/>
      </Routes>
    </main>
    </Container>
    <Footer/>
    </Router>
  )
}

export default App
