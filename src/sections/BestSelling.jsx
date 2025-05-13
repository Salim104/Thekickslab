import React from 'react';
import { Link } from 'react-router-dom';
import jordan1 from '../assets/jordan-air-jordan-4-retro-black-cat-2020-sneakers-2.png';
import jordan2 from '../assets/jordan-air-jordan-4-retro-black-cat-2020-sneakers-1.png';
import jordan3 from '../assets/jordan-air-jordan-4-retro-black-cat-2020-sneakers-3.png';

const BestSelling = () => {
  const products = [
    {
      id: 1,
      name: 'NIKE JORDAN 1 LOW WOLF',
      image: jordan1,
      originalPrice: 1499.99,
      salePrice: 1099.99,
      discount: 30
    },
    {
      id: 2,
      name: 'NIKE AIR JORDAN 4',
      image: jordan2,
      originalPrice: 7999.99,
      salePrice: 6499.99,
      discount: 20
    },
    {
      id: 3,
      name: 'NIKE JORDAN 1 LOW WOLF',
      image: jordan3,
      originalPrice: 1999.99,
      salePrice: 1499.99,
      discount: 25
    }
  ];

  return (
    <section className="py-10 bg-white">
      <div className="container mx-auto px-4">
        <div className="mb-8 flex items-center">
          <h2 className="text-3xl font-bold">
            BEST SELLING
          </h2>
          <div className="ml-4 h-0.5 bg-black flex-grow"></div>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map(product => (
            <div key={product.id} className="group relative">
              {/* Discount badge */}
              <div className="absolute top-2 left-2 bg-red-600 text-white text-xs font-bold px-2 py-1 z-10">
                -{product.discount}%
              </div>
              
              {/* Product image */}
              <div className="bg-white p-4 flex justify-center items-center mb-3">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="h-48 object-contain hover:scale-105 transition-transform duration-300"
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
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BestSelling;
