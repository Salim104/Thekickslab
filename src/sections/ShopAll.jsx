import React from 'react';
import productsData from '../data/products.json';
import ProductCard from '../components/ProductCard';

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
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ShopAll;
