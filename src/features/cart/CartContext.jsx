import React, { createContext, useContext, useReducer } from 'react';

// Initial state for the cart
const initialState = {
  items: [],
  totalItems: 0,
  totalAmount: 0
};

// Create context
const CartContext = createContext();

// Cart reducer to handle different cart actions
const cartReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_ITEM': {
      const existingItemIndex = state.items.findIndex(item => item.id === action.payload.id);
      
      if (existingItemIndex >= 0) {
        // Item exists, update quantity
        const updatedItems = [...state.items];
        updatedItems[existingItemIndex] = {
          ...updatedItems[existingItemIndex],
          quantity: updatedItems[existingItemIndex].quantity + 1
        };
        
        return {
          ...state,
          items: updatedItems,
          totalItems: state.totalItems + 1,
          totalAmount: state.totalAmount + action.payload.salePrice
        };
      } else {
        // Add new item
        return {
          ...state,
          items: [...state.items, { ...action.payload, quantity: 1 }],
          totalItems: state.totalItems + 1,
          totalAmount: state.totalAmount + action.payload.salePrice
        };
      }
    }
    
    case 'REMOVE_ITEM': {
      const existingItem = state.items.find(item => item.id === action.payload);
      
      if (!existingItem) return state;
      
      if (existingItem.quantity === 1) {
        // Remove item completely
        return {
          ...state,
          items: state.items.filter(item => item.id !== action.payload),
          totalItems: state.totalItems - 1,
          totalAmount: state.totalAmount - existingItem.salePrice
        };
      } else {
        // Decrease quantity
        return {
          ...state,
          items: state.items.map(item => 
            item.id === action.payload 
              ? { ...item, quantity: item.quantity - 1 } 
              : item
          ),
          totalItems: state.totalItems - 1,
          totalAmount: state.totalAmount - existingItem.salePrice
        };
      }
    }
    
    case 'CLEAR_CART':
      return initialState;
      
    default:
      return state;
  }
};

// Provider component
export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);
  
  // Actions
  const addItem = (item) => {
    dispatch({ type: 'ADD_ITEM', payload: item });
  };
  
  const removeItem = (id) => {
    dispatch({ type: 'REMOVE_ITEM', payload: id });
  };
  
  const clearCart = () => {
    dispatch({ type: 'CLEAR_CART' });
  };
  
  return (
    <CartContext.Provider value={{ 
      ...state, 
      addItem, 
      removeItem, 
      clearCart 
    }}>
      {children}
    </CartContext.Provider>
  );
};

// Custom hook to use the cart context
export const useCart = () => {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};

export default CartContext;
