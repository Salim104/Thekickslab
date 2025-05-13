import React from 'react';
import { useCart } from './CartContext.jsx';

const CartItem = ({ item }) => {
  const { removeItem } = useCart();
  
  return (
    <div className="flex items-center py-4 border-b border-gray-200">
      <div className="w-20 h-20 flex-shrink-0">
        <img src={item.image} alt={item.name} className="w-full h-full object-contain" />
      </div>
      <div className="ml-4 flex-grow">
        <h3 className="text-sm font-medium">{item.name}</h3>
        <div className="flex items-center mt-1">
          <span className="text-gray-600 text-sm">{item.quantity} × </span>
          <span className="text-red-600 font-bold ml-1">R{item.price.toFixed(2)}</span>
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
  );
};

export default CartItem;
