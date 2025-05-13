import React from 'react';
import truckIcon from '../assets/icons-images/truck 1.svg';
import trophyIcon from '../assets/icons-images/trophy 2.svg';
import customerServiceIcon from '../assets/icons-images/customer-service 1.svg';

const Features = () => {
  return (
    <section className="py-10 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex items-center justify-center md:justify-start">
            <img src={truckIcon} alt="Free Shipping" className="w-12 h-12 mr-4" />
            <div>
              <h3 className="font-bold">Free Shipping</h3>
              <p className="text-sm text-gray-600">On all orders over $150</p>
            </div>
          </div>
          
          <div className="flex items-center justify-center md:justify-start">
            <img src={trophyIcon} alt="Authenticity Check" className="w-12 h-12 mr-4" />
            <div>
              <h3 className="font-bold">Authenticity Check</h3>
              <p className="text-sm text-gray-600">On all items before delivery</p>
            </div>
          </div>
          
          <div className="flex items-center justify-center md:justify-start">
            <img src={customerServiceIcon} alt="Dedicated Support" className="w-12 h-12 mr-4" />
            <div>
              <h3 className="font-bold">Dedicated Support</h3>
              <p className="text-sm text-gray-600">24/7 amazing customer service</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
