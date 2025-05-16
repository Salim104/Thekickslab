import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaHeart, FaShoppingCart } from 'react-icons/fa';
import { useCart } from '../features/cart/CartContext';
import { useWishlist } from '../features/wishlist/WishlistContext';

const ProductCard = ({ product, showActions = true }) => {
  const [isHovered, setIsHovered] = useState(false);
  const { addItem } = useCart();
  const { addToWishlist, isInWishlist } = useWishlist();

  const handleAddToCart = (e) => {
    e.preventDefault();
    e.stopPropagation();
    addItem(product);
  };

  const handleAddToWishlist = (e) => {
    e.preventDefault();
    e.stopPropagation();
    addToWishlist(product);
  };

  return (
    <div 
      className="group relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Link to={`/product/${product.id}`}>
        {/* Discount badge */}
        {product.discount > 0 && (
          <div className="absolute top-2 left-2 bg-red-600 text-white text-xs font-bold px-2 py-1 z-10">
            -{product.discount}%
          </div>
        )}
        
        {/* Product image with hover overlay */}
        <div className="bg-white p-4 flex justify-center items-center mb-3 relative overflow-hidden">
          <img 
            src={product.image} 
            alt={product.name}
            className="h-48 object-contain transition-transform duration-300 hover:scale-105"
          />
          
          {/* Hover actions */}
          {showActions && (
            <div 
              className={`absolute inset-0 bg-black bg-opacity-20 flex items-center justify-center transition-opacity duration-300 ${
                isHovered ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <div className="flex flex-col space-y-2">
                <button 
                  onClick={handleAddToCart}
                  className="bg-white text-black py-2 px-3 rounded-md text-sm flex items-center justify-center transition-transform hover:scale-105"
                >
                  <FaShoppingCart className="mr-2" />
                  Add to Cart
                </button>
              </div>
            </div>
          )}
        </div>
        
        {/* Product info */}
        <div className="text-center">
          <h3 className="text-xs font-medium text-gray-600 mb-2 uppercase">{product.name}</h3>
          <div className="flex items-center justify-center space-x-2">
            <span className="text-gray-400 line-through text-sm">
              R{product.regularPrice ? product.regularPrice.toFixed(2) : product.originalPrice.toFixed(2)}
            </span>
            <span className="text-black font-bold">R{product.salePrice.toFixed(2)}</span>
          </div>
        </div>
      </Link>

      {/* Wishlist icon - only show when hovering or item is in wishlist */}
      {showActions && (
        <button
          onClick={handleAddToWishlist}
          className={`absolute top-2 right-2 p-2 text-xl z-20 transition-opacity duration-300 ${
            isHovered || isInWishlist(product.id) ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <FaHeart className="text-red-600" />
        </button>
      )}
    </div>
  );
};

export default ProductCard;
