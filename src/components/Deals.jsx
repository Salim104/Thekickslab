import React from 'react';
import dealsImage from '../assets/deals-image.png';

const Deals = () => {
  return (
    <section className="bg-black text-white overflow-hidden">
      <div className="flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 p-8 md:p-12 lg:p-16">
          <h2 className="text-2xl font-bold mb-4">Hot & Exclusive deals</h2>
          <div className="flex items-baseline mb-6">
            <span className="text-5xl md:text-6xl font-bold text-red-600 mr-3">30%</span>
            <span className="text-4xl md:text-5xl font-bold text-white">OFF</span>
          </div>
          <button className="bg-white text-black px-6 py-2 rounded-sm hover:bg-gray-200 transition duration-300">
            Shop Now
          </button>
        </div>
        <div className="md:w-1/2 h-full">
          <img 
            src={dealsImage} 
            alt="Exclusive Deals" 
            className="w-full h-full object-cover object-center"
          />
        </div>
      </div>
    </section>
  );
};

export default Deals;
