import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from './CartContext.jsx';

const CartDrawer = ({ isOpen, onClose }) => {
  const { items, totalItems, totalAmount, removeItem, clearCart } = useCart();

  return (
    <div className={`fixed inset-0 z-50 ${isOpen ? 'block' : 'hidden'}`}>
      {/* Overlay */}
      <div 
        className="absolute inset-0 bg-black bg-opacity-50"
        onClick={onClose}
      ></div>
      
      {/* Cart panel */}
      <div className="absolute top-0 right-0 h-full w-full max-w-md bg-white shadow-lg transform transition-transform duration-300 ease-in-out">
        <div className="p-4 border-b border-gray-200 flex justify-between items-center">
          <h2 className="text-xl font-bold">Your Cart ({totalItems})</h2>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        
        <div className="p-4 overflow-y-auto h-[calc(100vh-170px)]">
          {items.length === 0 ? (
            <div className="text-center py-8">
              <p className="text-gray-500 mb-4">Your cart is empty</p>
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
                    <h3 className="text-sm font-medium">{item.name}</h3>
                    <div className="flex items-center mt-1">
                      <span className="text-gray-600 text-sm">{item.quantity} × </span>
                      <span className="text-red-600 font-bold ml-1">R{item.salePrice.toFixed(2)}</span>
                    </div>
                  </div>
                  <button 
                    onClick={() => removeItem(item.id)}
                    className="text-gray-400 hover:text-red-600"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                    </svg>
                  </button>
                </div>
              ))}
              
              <div className="mt-6 py-4 border-t border-gray-200">
                <div className="flex justify-between mb-4">
                  <span className="font-bold">Subtotal:</span>
                  <span className="font-bold">R{totalAmount.toFixed(2)}</span>
                </div>
                
                <button
                  onClick={clearCart}
                  className="w-full bg-gray-200 text-gray-800 py-2 rounded-md mb-3 hover:bg-gray-300 transition-colors"
                >
                  Clear Cart
                </button>
                
                <Link
                  to="/checkout"
                  className="w-full bg-black text-white py-2 rounded-md text-center block hover:bg-red-600 transition-colors"
                  onClick={onClose}
                >
                  Checkout
                </Link>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default CartDrawer;
