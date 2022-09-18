import React from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import {Container} from 'react-bootstrap'

const App = () => {
  return (
    <>
    <Header/>
    <Container>
    <h1>Home Screen</h1>
    <Footer/>
    </Container>
    </>
  )
}

export default App
