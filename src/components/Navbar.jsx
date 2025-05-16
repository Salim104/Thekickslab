import React from 'react';
import { Link } from 'react-router-dom';
import mainLogo from '../assets/main-logo.png';
import searchIcon from '../assets/icons-images/search.svg';
import favoriteIcon from '../assets/icons-images/favorite.svg';
import profileIcon from '../assets/icons-images/profile.svg';
import { useCart } from '../features/cart/CartContext.jsx';
import { useWishlist } from '../features/wishlist/WishlistContext.jsx';

const Navbar = ({ onCartClick, onWishlistClick }) => {
  const { totalItems } = useCart();
  const { totalItems: wishlistItems } = useWishlist();
  return (
    <header className="py-2 px-6 flex justify-between items-center bg-white">
      <div className="flex items-center">
        <img src={mainLogo} alt="The Kicks Lab Logo" className="h-8" />
      </div>
      
      <div className="flex items-center">
        <nav className="flex space-x-8 mr-6">
          <Link to="/" className="text-sm font-medium hover:text-red-600">Home</Link>
          <Link to="/shop" className="text-sm font-medium hover:text-red-600">Shop</Link>
          <Link to="/contact" className="text-sm font-medium hover:text-red-600">Contact</Link>
        </nav>
      
        <div className="flex items-center space-x-4">
          <button className="p-1">
            <img src={searchIcon} alt="Search" className="h-5 w-5" />
          </button>
          <button className="p-1 relative" onClick={onWishlistClick}>
            <img src={favoriteIcon} alt="Favorites" className="h-5 w-5" />
            {wishlistItems > 0 && (
              <span className="absolute -top-1 -right-1 bg-red-600 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
                {wishlistItems}
              </span>
            )}
          </button>
          <button className="p-1">
            <img src={profileIcon} alt="Profile" className="h-5 w-5" />
          </button>
          <button onClick={onCartClick} className="p-1 relative">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
            </svg>
            {totalItems > 0 && (
              <span className="absolute -top-1 -right-1 bg-red-600 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
                {totalItems}
              </span>
            )}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
