import React, { useState } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import AppRoutes from './router/routes'
import { CartProvider } from './features/cart/CartContext.jsx'
import { WishlistProvider } from './features/wishlist/WishlistContext.jsx'
import CartDrawer from './features/cart/CartDrawer'
import WishlistDrawer from './features/wishlist/WishlistDrawer'

// Styles
import './styles/base.css'

function App() {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isWishlistOpen, setIsWishlistOpen] = useState(false);

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
    if (isWishlistOpen) setIsWishlistOpen(false);
  };
  
  const toggleWishlist = () => {
    setIsWishlistOpen(!isWishlistOpen);
    if (isCartOpen) setIsCartOpen(false);
  };

  return (
    <CartProvider>
      <WishlistProvider>
        <Router>
          <div className="min-h-screen flex flex-col">
            <Navbar onCartClick={toggleCart} onWishlistClick={toggleWishlist} />
            <main className="flex-grow">
              <AppRoutes />
            </main>
            <Footer />
            <CartDrawer isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
            <WishlistDrawer isOpen={isWishlistOpen} onClose={() => setIsWishlistOpen(false)} />
          </div>
        </Router>
      </WishlistProvider>
    </CartProvider>
  )
}

export default App
