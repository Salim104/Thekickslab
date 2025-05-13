import React from 'react';
import { Link } from 'react-router-dom';
import adidasCampus from '../assets/adidas Campus 00s-1.png';
import adidasYeezy from '../assets/adidas-adidas-yeezy-700-1.png';
import nikeUptempo from '../assets/nike-nike-air-more-uptempo-black-white-2016-2020-sneakers-1.png';
import nikeRed from '../assets/Air Max Tailwind V x Skepta(Chrome red)-1.png';
import nikeBlue from '../assets/Air Max Tailwind V x Skepta(Chrome Blue)-1.png';
import newBalance550 from '../assets/new-balance-new-balance-550-aime-leon-dore-white-grey-sneakers-1.png';
import newBalance327 from '../assets/new balance 327 black-1.png';
import newBalance990 from '../assets/new-balance-new-balance-550-white-grey-sneakers-1.png';

const ShopAll = () => {
  const products = [
    {
      id: 1,
      name: 'Adidas Campus Core Black and White',
      image: adidasCampus,
      originalPrice: 799.99,
      salePrice: 599.99,
      discount: 40
    },
    {
      id: 2,
      name: 'ADIDAS YEEZY 700 V3 MONO SAFFLOWER',
      image: adidasYeezy,
      originalPrice: 999.99,
      salePrice: 599.99,
      discount: 30
    },
    {
      id: 3,
      name: 'AIR JORDAN 4 RETRO BLACK CAT',
      image: nikeUptempo,
      originalPrice: 1299.99,
      salePrice: 799.99,
      discount: 50
    },
    {
      id: 4,
      name: 'Air Max Tailwind V Skepta (Chrome Red)',
      image: nikeRed,
      originalPrice: 1099.99,
      salePrice: 699.99,
      discount: 30
    },
    {
      id: 5,
      name: 'Air Max Tailwind V Skepta (Chrome Blue)',
      image: nikeBlue,
      originalPrice: 1599.99,
      salePrice: 999.99,
      discount: 40
    },
    {
      id: 6,
      name: 'JORDAN 4 RETRO SE PINE GREEN',
      image: newBalance550,
      originalPrice: 1399.99,
      salePrice: 799.99,
      discount: 30
    },
    {
      id: 7,
      name: 'NEW BALANCE 550 AIME LEON DORE WHITE GREY',
      image: newBalance327,
      originalPrice: 1299.99,
      salePrice: 999.99,
      discount: 40
    },
    {
      id: 8,
      name: 'New Balance 327 Black & White',
      image: newBalance990,
      originalPrice: 1499.99,
      salePrice: 499.99,
      discount: 30
    }
  ];

  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <div className="mb-8 flex items-center">
          <h2 className="text-3xl font-bold">
            Shop All
          </h2>
          <div className="ml-4 h-0.5 bg-black flex-grow"></div>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
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
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ShopAll;
