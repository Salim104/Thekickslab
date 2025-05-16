import React, { createContext, useContext, useReducer } from 'react';

// Initial state for the wishlist
const initialState = {
  items: [],
  totalItems: 0
};

// Create context
const WishlistContext = createContext();

// Wishlist reducer to handle different wishlist actions
const wishlistReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TO_WISHLIST': {
      const existingItemIndex = state.items.findIndex(item => item.id === action.payload.id);
      
      if (existingItemIndex >= 0) {
        // Item already in wishlist, remove it (toggle behavior)
        return {
          ...state,
          items: state.items.filter(item => item.id !== action.payload.id),
          totalItems: state.totalItems - 1
        };
      } else {
        // Add new item to wishlist
        return {
          ...state,
          items: [...state.items, action.payload],
          totalItems: state.totalItems + 1
        };
      }
    }
    
    case 'REMOVE_FROM_WISHLIST': {
      return {
        ...state,
        items: state.items.filter(item => item.id !== action.payload),
        totalItems: state.totalItems - 1
      };
    }
    
    case 'CLEAR_WISHLIST':
      return initialState;
      
    default:
      return state;
  }
};

// Provider component
export const WishlistProvider = ({ children }) => {
  const [state, dispatch] = useReducer(wishlistReducer, initialState);
  
  // Actions
  const addToWishlist = (item) => {
    dispatch({ type: 'ADD_TO_WISHLIST', payload: item });
  };
  
  const removeFromWishlist = (id) => {
    dispatch({ type: 'REMOVE_FROM_WISHLIST', payload: id });
  };
  
  const clearWishlist = () => {
    dispatch({ type: 'CLEAR_WISHLIST' });
  };
  
  const isInWishlist = (id) => {
    return state.items.some(item => item.id === id);
  };
  
  return (
    <WishlistContext.Provider value={{ 
      ...state, 
      addToWishlist, 
      removeFromWishlist, 
      clearWishlist,
      isInWishlist
    }}>
      {children}
    </WishlistContext.Provider>
  );
};

// Custom hook to use the wishlist context
export const useWishlist = () => {
  const context = useContext(WishlistContext);
  if (context === undefined) {
    throw new Error('useWishlist must be used within a WishlistProvider');
  }
  return context;
};

export default WishlistContext;
