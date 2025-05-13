import React from 'react';
import { Link } from 'react-router-dom';
import mainLogo from '../assets/main-logo.png';
import searchIcon from '../assets/icons-images/search.svg';
import favoriteIcon from '../assets/icons-images/favorite.svg';
import profileIcon from '../assets/icons-images/profile.svg';

const Header = () => {
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
          <button className="p-1 relative">
            <img src={favoriteIcon} alt="Favorites" className="h-5 w-5" />
          </button>
          <button className="p-1">
            <img src={profileIcon} alt="Profile" className="h-5 w-5" />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
