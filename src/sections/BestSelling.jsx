import React from 'react';
import productsData from '../data/products.json';
import ProductCard from '../components/ProductCard';

const BestSelling = () => {
  // Select 3 top products from the products.json data
  const products = [
    productsData.products.find(p => p.id === 3), // AIR JORDAN 4 RETRO BLACK CAT
    productsData.products.find(p => p.id === 6), // JORDAN 4 RETRO SB PINE GREEN
    productsData.products.find(p => p.id === 5)  // AIR MAX TAILWIND V x SKEPTA
  ].map(product => ({
    ...product,
    originalPrice: product.regularPrice,
  }));

  return (
    <section className="py-10 bg-white">
      <div className="container mx-auto px-4">
        <div className="mb-8 flex items-center">
          <h2 className="text-3xl font-bold">
            BEST SELLING
          </h2>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BestSelling;
