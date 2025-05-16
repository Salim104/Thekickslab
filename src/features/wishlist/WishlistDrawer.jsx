import React from 'react';
import { Link } from 'react-router-dom';
import { useWishlist } from './WishlistContext';
import { useCart } from '../cart/CartContext';
import { FaShoppingCart, FaTrash } from 'react-icons/fa';

const WishlistDrawer = ({ isOpen, onClose }) => {
  const { items, totalItems, removeFromWishlist } = useWishlist();
  const { addItem } = useCart();

  const handleAddToCart = (item) => {
    addItem(item);
    // Optional: You can keep the item in wishlist or remove it after adding to cart
    // removeFromWishlist(item.id);
  };

  return (
    <div className={`fixed inset-0 z-50 ${isOpen ? 'block' : 'hidden'}`}>
      {/* Overlay */}
      <div 
        className="absolute inset-0 bg-black bg-opacity-50"
        onClick={onClose}
      ></div>
      
      {/* Wishlist panel */}
      <div className="absolute top-0 right-0 h-full w-full max-w-md bg-white shadow-lg transform transition-transform duration-300 ease-in-out">
        <div className="p-4 border-b border-gray-200 flex justify-between items-center">
          <h2 className="text-xl font-bold">Your Wishlist ({totalItems})</h2>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        
        <div className="p-4 overflow-y-auto h-[calc(100vh-170px)]">
          {items.length === 0 ? (
            <div className="text-center py-8">
              <p className="text-gray-500 mb-4">Your wishlist is empty</p>
              <Link 
                to="/shop" 
                className="bg-black text-white px-4 py-2 rounded-md inline-block hover:bg-red-600 transition-colors"
                onClick={onClose}
              >
                Continue Shopping
              </Link>
            </div>
          ) : (
            <>
              {items.map(item => (
                <div key={item.id} className="flex items-center py-4 border-b border-gray-200">
                  <div className="w-20 h-20 flex-shrink-0">
                    <img src={item.image} alt={item.name} className="w-full h-full object-contain" />
                  </div>
                  <div className="ml-4 flex-grow">
                    <Link 
                      to={`/product/${item.id}`} 
                      onClick={onClose}
                      className="text-sm font-medium hover:text-red-600"
                    >
                      {item.name}
                    </Link>
                    <div className="flex items-center mt-1">
                      <span className="text-red-600 font-bold">R{item.salePrice.toFixed(2)}</span>
                    </div>
                    <div className="flex mt-2 space-x-2">
                      <button 
                        onClick={() => handleAddToCart(item)}
                        className="flex items-center text-xs bg-black text-white px-2 py-1 rounded"
                      >
                        <FaShoppingCart className="mr-1" />
                        Add to Cart
                      </button>
                      <button 
                        onClick={() => removeFromWishlist(item.id)}
                        className="flex items-center text-xs bg-gray-200 text-gray-800 px-2 py-1 rounded"
                      >
                        <FaTrash className="mr-1" />
                        Remove
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default WishlistDrawer;
