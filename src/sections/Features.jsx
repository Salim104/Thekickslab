import React from 'react';
import truckIcon from '../assets/icons-images/truck 1.svg';
import trophyIcon from '../assets/icons-images/trophy 2.svg';
import customerServiceIcon from '../assets/icons-images/customer-service 1.svg';

const Features = () => {
  const features = [
    {
      id: 1,
      title: 'Free Shipping',
      description: 'On all orders above $299',
      icon: truckIcon,
    },
    {
      id: 2,
      title: 'Affordable Prices',
      description: 'Get factory direct prices',
      icon: trophyIcon,
    },
    {
      id: 3,
      title: 'Dedicated support',
      description: 'Talk to our specialists',
      icon: customerServiceIcon,
    },
  ];

  return (
    <section className="py-8 bg-white  border-gray-200">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-around items-center">
          {features.map((feature) => (
            <div key={feature.id} className="flex items-center p-4 md:w-1/3">
              <img src={feature.icon} alt={feature.title} className="h-10 w-10 mr-4" />
              <div>
                <h3 className="text-base font-bold">{feature.title}</h3>
                <p className="text-sm text-gray-600">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
