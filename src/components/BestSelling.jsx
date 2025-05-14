import React from 'react';
import { Link } from 'react-router-dom';
import jordanLowWolf from '../assets/nike-nike-dunk-low-grey-fog-sneakers.png';
import airJordan4 from '../assets/jordan-air-jordan-4-retro-black-cat-2020-sneakers-1.png';
import nikeDunkRed from '../assets/nike-nike-dunk-low-team-red-2022-sneakers-1.png';

const BestSelling = () => {
  const products = [
    {
      id: 1,
      name: 'NIKE JORDAN 1 LOW WOLF GREY',
      price: '£229.99',
      discountedPrice: '£199.99',
      discountPercentage: '13',
      image: jordanLowWolf,
      badge: 'BEST SELLER'
    },
    {
      id: 2,
      name: 'NIKE AIR JORDAN 4 RETRO BLACK CAT',
      price: '£299.99',
      discountedPrice: '£249.99',
      discountPercentage: '17',
      image: airJordan4,
      badge: 'HOT'
    },
    {
      id: 3,
      name: 'NIKE DUNK LOW TEAM RED',
      price: '£189.99',
      discountedPrice: '£149.99',
      discountPercentage: '21',
      image: nikeDunkRed,
      badge: 'TOP RATED'
    }
  ];

  return (
    <section className="px-4 md:px-8 py-12 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Title with underline */}
        <div className="flex mb-8">
          <div>
            <h2 className="text-3xl font-bold font-serif">Best Selling</h2>
            <div className="h-0.5 bg-black w-full mt-2"></div>
          </div>
        </div>
        
        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {products.map((product) => (
            <div 
              key={product.id} 
              className="group relative bg-white transition-all duration-300 hover:shadow-lg hover:scale-105"
            >
              <Link to={`/product/${product.id}`}>
              {/* Badge */}
              <div className="absolute top-2 left-2 bg-red-600 text-white text-xs px-2 py-1 z-10">
                {product.badge}
              </div>
              
              {/* Product Image */}
              <div className="bg-gray-50 p-4 mb-3 flex items-center justify-center h-64">
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
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BestSelling;
