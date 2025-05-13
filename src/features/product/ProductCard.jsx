import React from 'react';
import { Link } from 'react-router-dom';

const ProductCard = ({ product }) => {
  const { id, name, image, regularPrice, salePrice, discount } = product;
  
  return (
    <div className="group">
      <div className="relative overflow-hidden mb-3">
        {discount > 0 && (
          <span className="absolute top-2 left-2 bg-red-600 text-white text-xs font-bold px-2 py-1 z-10">
            -{discount}%
          </span>
        )}
        <Link to={`/product/${id}`}>
          <img 
            src={image} 
            alt={name}
            className="w-full h-60 object-contain hover:scale-105 transition-transform duration-300"
          />
        </Link>
      </div>
      <h3 className="text-sm uppercase font-medium text-gray-700 mb-1">{name}</h3>
      <div className="flex items-center space-x-2">
        <span className="text-red-600 font-bold">R{salePrice.toFixed(2)}</span>
        {regularPrice > salePrice && (
          <span className="text-gray-400 line-through text-sm">R{regularPrice.toFixed(2)}</span>
        )}
      </div>
    </div>
  );
};

export default ProductCard;
