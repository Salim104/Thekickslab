import React from 'react';
import { Link } from 'react-router-dom';
import productsData from '../data/products.json';

const ShopAll = () => {
  // Use 8 products directly from products.json
  const products = productsData.products
    .slice(0, 8)
    .map(product => ({
      ...product,
      originalPrice: product.regularPrice,
    }));

  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <div className="mb-8 flex items-center">
          <h2 className="text-3xl font-bold">
            Shop All
          </h2>
          
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map(product => (
            <div key={product.id} className="group relative">
              <Link to={`/product/${product.id}`}>
              {/* Discount badge */}
              <div className="absolute top-2 left-2 bg-red-600 text-white text-xs font-bold px-2 py-1 z-10">
                -{product.discount}%
              </div>
              
              {/* Product image */}
              <div className="bg-white p-4 flex justify-center items-center mb-3">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="h-40 object-contain hover:scale-105 transition-transform duration-300"
                />
              </div>
              
              {/* Product info */}
              <div className="text-center">
                <h3 className="text-xs font-medium text-gray-600 mb-2 uppercase">{product.name}</h3>
                <div className="flex items-center justify-center space-x-2">
                  <span className="text-gray-400 line-through text-sm">R{product.originalPrice.toFixed(2)}</span>
                  <span className="text-black font-bold">R{product.salePrice.toFixed(2)}</span>
                </div>
              </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ShopAll;
