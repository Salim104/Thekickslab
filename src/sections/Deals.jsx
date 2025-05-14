import React from 'react';
import { Link } from 'react-router-dom';
import dealsImage from '../assets/deals-image.png';

const Deals = () => {
  return (
    <section className="bg-black">
      <div className="container mx-auto ">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="text-white mb-8 md:mb-0 md:w-1/2">
            <h2 className="text-5xl font-bold mb-4">30% <span className="text-red-600">OFF</span></h2>
            <p className="text-lg mb-6">Hot & Exclusive deals</p>
            <Link to="/shop" className="inline-block bg-white text-black font-medium py-2 px-6 rounded-sm hover:bg-gray-200 transition-colors">
              Shop Now
            </Link>
          </div>
          <div className="md:w-1/2">
            <img 
              src={dealsImage} 
              alt="Special Deals" 
              className="w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Deals;
