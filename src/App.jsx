import React from 'react'
import Header from './Comp/Header'
import Footer from './Comp/Footer'
import { CartProvider } from './Pages.jsx/CartContext'

function App() {
  return (
    <>
    <CartProvider>
    <Header/>
    <Footer/>
    </CartProvider>
    </>
  )
}

export default App