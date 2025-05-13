import React, { useState } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import AppRoutes from './router/routes'
import { CartProvider } from './features/cart/CartContext.jsx'
import CartDrawer from './features/cart/CartDrawer'

// Styles
import './styles/base.css'

function App() {
  const [isCartOpen, setIsCartOpen] = useState(false);

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };

  return (
    <CartProvider>
      <Router>
        <div className="min-h-screen flex flex-col">
          <Navbar onCartClick={toggleCart} />
          <main className="flex-grow">
            <AppRoutes />
          </main>
          <Footer />
          <CartDrawer isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
        </div>
      </Router>
    </CartProvider>
  )
}

export default App
