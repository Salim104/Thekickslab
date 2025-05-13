import React from 'react';
import mainLogo from '../assets/main-logo.png';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <img src={mainLogo} alt="The Kicks Lab Logo" className="h-8 mr-2" />
            </div>
            <p className="text-sm text-gray-400 mb-4">
              The Kicks Lab is your premier destination for authentic, limited-edition sneakers and streetwear. We offer a curated selection of the latest and most coveted releases.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">COMPANY</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#" className="hover:text-white">About Us</a></li>
              <li><a href="#" className="hover:text-white">Careers</a></li>
              <li><a href="#" className="hover:text-white">Store Locations</a></li>
              <li><a href="#" className="hover:text-white">Our Blog</a></li>
              <li><a href="#" className="hover:text-white">Reviews</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">HELP</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#" className="hover:text-white">Customer Service</a></li>
              <li><a href="#" className="hover:text-white">My Account</a></li>
              <li><a href="#" className="hover:text-white">Find a Store</a></li>
              <li><a href="#" className="hover:text-white">Legal & Privacy</a></li>
              <li><a href="#" className="hover:text-white">Contact</a></li>
              <li><a href="#" className="hover:text-white">Gift Cards</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">SUPPORT</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#" className="hover:text-white">Shipping Policy</a></li>
              <li><a href="#" className="hover:text-white">Returns & Exchanges</a></li>
              <li><a href="#" className="hover:text-white">Authenticity Guarantee</a></li>
              <li><a href="#" className="hover:text-white">FAQ</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-500">
          <p>Copyright © 2025 The Kicks Lab • Developed by The Dev</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
