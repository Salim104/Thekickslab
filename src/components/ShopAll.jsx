import React from 'react';
import adidasCampus from '../assets/adidas Campus 00s-1.png';
import adidasYeezy from '../assets/adidas-adidas-yeezy-700-1.png';
import nikeUptempo from '../assets/nike-nike-air-more-uptempo-black-white-2016-2020-sneakers-1.png';
import nikeDunkRed from '../assets/nike-nike-dunk-low-team-red-2022-sneakers-1.png';
import airMaxTailwind from '../assets/Air Max Tailwind V x Skepta(Chrome Blue)-1.png';
import airMaxTailwindRed from '../assets/Air Max Tailwind V x Skepta(Chrome red)-1.png';
import newBalance550 from '../assets/new-balance-new-balance-550-gs-white-vintage-teal-streetwear-1.png';
import newBalance327 from '../assets/new balance 327 black-1.png';
import newBalance550Grey from '../assets/new-balance-new-balance-550-white-grey-sneakers-1.png';
import jordan4 from '../assets/jordan-air-jordan-4-retro-black-cat-2020-sneakers-1.png';

const ShopAll = () => {
  const products = [
    {
      id: 1,
      name: 'ADIDAS CAMPUS CORE BLACK AND WHITE',
      price: '£169.99',
      discountedPrice: '£99.99',
      discountPercentage: '15',
      image: adidasCampus
    },
    {
      id: 2,
      name: 'ADIDAS YEEZY 700 V3 MONO SAFFLOWER',
      price: '£369.99',
      discountedPrice: '£199.99',
      discountPercentage: '45',
      image: adidasYeezy
    },
    {
      id: 3,
      name: 'AIR JORDAN 4 RETRO BLACK CAT',
      price: '£899.99',
      discountedPrice: '£799.99',
      discountPercentage: '10',
      image: jordan4
    },
    {
      id: 4,
      name: 'AIR MAX TAILWIND V SKEPTA CHROME RED',
      price: '£269.99',
      discountedPrice: '£189.99',
      discountPercentage: '30',
      image: airMaxTailwindRed
    },
    {
      id: 5,
      name: 'AIR MAX TAILWIND V x SKEPTA CHROME BLUE',
      price: '£269.99',
      discountedPrice: '£199.99',
      discountPercentage: '15',
      image: airMaxTailwind
    },
    {
      id: 6,
      name: 'JORDAN 4 RETRO SE PINE GREEN',
      price: '£399.99',
      discountedPrice: '£179.99',
      discountPercentage: '30',
      image: newBalance550
    },
    {
      id: 7,
      name: 'NEW BALANCE 327 BLACK & WHITE',
      price: '£229.99',
      discountedPrice: '£149.99',
      discountPercentage: '35',
      image: newBalance327
    },
    {
      id: 8,
      name: 'NEW BALANCE 550 AIME LEON DORE WHITE GREY',
      price: '£399.99',
      discountedPrice: '£199.99',
      discountPercentage: '15',
      image: newBalance550Grey
    }
  ];

  return (
    <section className="px-4 md:px-8 py-12 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Title with underline */}
        <div className="flex justify-center mb-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold font-serif">Shop All</h2>
            <div className="h-0.5 bg-black w-full mt-2"></div>
          </div>
        </div>
        
        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {products.map((product) => (
            <div 
              key={product.id} 
              className="group relative bg-white transition-all duration-300 hover:shadow-lg hover:scale-105"
            >
              {/* Discount Badge */}
              <div className="absolute top-2 left-2 bg-red-600 text-white text-xs px-2 py-1 z-10">
                -{product.discountPercentage}%
              </div>
              
              {/* Product Image */}
              <div className="bg-gray-50 p-4 mb-3 flex items-center justify-center h-56">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full h-full object-contain"
                />
              </div>
              
              {/* Product Details */}
              <div className="p-3 text-center">
                <h3 className="text-sm uppercase tracking-tight text-gray-700 mb-2 h-12 overflow-hidden">
                  {product.name}
                </h3>
                <div className="flex justify-center items-center space-x-2">
                  <span className="line-through text-gray-400 text-xs">{product.price}</span>
                  <span className="text-black font-semibold text-sm">{product.discountedPrice}</span>
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
