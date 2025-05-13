import React, { useState } from 'react';
import searchIcon from '../assets/icons-images/search.svg';

// Import shoe images
import adidasCampus from '../assets/adidas Campus 00s-1.png';
import adidasYeezy from '../assets/adidas-adidas-yeezy-700-1.png';
import jordanBlackCat from '../assets/jordan-air-jordan-4-retro-black-cat-2020-sneakers-1.png';
import airMaxRed from '../assets/Air Max Tailwind V x Skepta(Chrome red)-1.png';
import airMaxBlue from '../assets/Air Max Tailwind V x Skepta(Chrome Blue)-1.png';
import jordan4Green from '../assets/nike-nike-sb-dunk-low-jarritos-sneakers-1.png'; // Using this as a substitute for Jordan 4 Retro SB Pine Green
import newBalance327 from '../assets/new balance 327 black-1.png';
import newBalance550ALD from '../assets/new-balance-new-balance-550-aime-leon-dore-white-grey-sneakers-1.png';
import newBalance550White from '../assets/new-balance-new-balance-550-white-grey-sneakers-1.png';
import newBalance550Teal from '../assets/new-balance-new-balance-550-gs-white-vintage-teal-streetwear-1.png';
import newBalance550Red from '../assets/new-balance-new-balance-550-white-red-sneakers-1.png';
import newBalance990 from '../assets/nike-nike-dunk-low-grey-fog-sneakers.png'; // Using as substitute for NB 990 Grey

const Shop = () => {
  const [priceRange, setPriceRange] = useState(1800);
  const [currentPage, setCurrentPage] = useState(1);

  // Mock product data based on the image
  const products = [
    {
      id: 1,
      name: 'adidas Campus Core Black and White',
      image: adidasCampus,
      regularPrice: 1799.99,
      salePrice: 1529.99,
      discount: 15,
      brand: 'adidas'
    },
    {
      id: 2,
      name: 'ADIDAS YEEZY 700 V3 MONO SAFFLOWER',
      image: adidasYeezy,
      regularPrice: 1999.99,
      salePrice: 1599.99,
      discount: 30,
      brand: 'adidas'
    },
    {
      id: 3,
      name: 'AIR JORDAN 4 RETRO BLACK CAT',
      image: jordanBlackCat,
      regularPrice: 1899.99,
      salePrice: 1799.99,
      discount: 10,
      brand: 'Jordan'
    },
    {
      id: 4,
      name: 'Air Max Tailwind V x Skepta Chrome Red',
      image: airMaxRed,
      regularPrice: 1899.99,
      salePrice: 1699.99,
      discount: 10,
      brand: 'Nike'
    },
    {
      id: 5,
      name: 'Air Max Tailwind V x Skepta Chrome Blue',
      image: airMaxBlue,
      regularPrice: 1999.99,
      salePrice: 1699.99,
      discount: 15,
      brand: 'Nike'
    },
    {
      id: 6,
      name: 'JORDAN 4 RETRO SB PINE GREEN',
      image: jordan4Green,
      regularPrice: 1999.99,
      salePrice: 1799.99,
      discount: 10,
      brand: 'Jordan'
    },
    {
      id: 7,
      name: 'New Balance 327 Black & White',
      image: newBalance327,
      regularPrice: 1699.99,
      salePrice: 1499.99,
      discount: 10,
      brand: 'New Balance'
    },
    {
      id: 8,
      name: 'NEW BALANCE 550 AiME LEON DORE WHITE GREY',
      image: newBalance550ALD,
      regularPrice: 1899.99,
      salePrice: 1599.99,
      discount: 15,
      brand: 'New Balance'
    },
    {
      id: 9,
      name: 'NEW BALANCE 550 GS WHITE VINTAGE TEAL',
      image: newBalance550Teal,
      regularPrice: 1899.99,
      salePrice: 1699.99,
      discount: 10,
      brand: 'New Balance'
    },
    {
      id: 10,
      name: 'NEW BALANCE 550 WHITE GREY',
      image: newBalance550White,
      regularPrice: 1999.99,
      salePrice: 1899.99,
      discount: 5,
      brand: 'New Balance'
    },
    {
      id: 11,
      name: 'NEW BALANCE 550 WHITE RED',
      image: newBalance550Red,
      regularPrice: 1999.99,
      salePrice: 1899.99,
      discount: 5,
      brand: 'New Balance'
    },
    {
      id: 12,
      name: 'NEW BALANCE 990 GREY',
      image: newBalance990,
      regularPrice: 1899.99,
      salePrice: 1699.99,
      discount: 10,
      brand: 'New Balance'
    }
  ];

  const categories = [
    { name: 'Adidas', count: 2 },
    { name: 'all', count: 21 },
    { name: 'best seller', count: 6 },
    { name: 'Converse', count: 1 },
    { name: 'New Balance', count: 6 },
    { name: 'Nike', count: 12 }
  ];

  const handleRangeChange = (e) => {
    setPriceRange(e.target.value);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Breadcrumb */}
      <div className="text-sm text-gray-500 mb-4">
        Showing 1 - 12 of 21 results
      </div>

      <div className="flex flex-col md:flex-row gap-8">
        {/* Sidebar */}
        <div className="w-full md:w-1/4">
          {/* Search box */}
          <div className="mb-8 relative">
            <input
              type="text"
              placeholder="Search products..."
              className="w-full border border-gray-300 rounded-full py-2 px-4 pr-10"
            />
            <button className="absolute right-3 top-2.5">
              <img src={searchIcon} alt="Search" className="h-5 w-5" />
            </button>
          </div>

          {/* Price filter */}
          <div className="mb-8">
            <h3 className="text-lg font-medium mb-4">Filter by price</h3>
            <div className="mb-4">
              <input
                type="range"
                min="0"
                max="2000"
                value={priceRange}
                onChange={handleRangeChange}
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
              />
            </div>
            <div className="flex justify-between">
              <button className="bg-black text-white py-1 px-4 rounded-md text-sm">Filter</button>
              <span className="text-sm">Price: R1000 — R{priceRange}</span>
            </div>
          </div>

          {/* Product categories */}
          <div className="mb-8">
            <h3 className="text-lg font-medium mb-4">Product categories</h3>
            <ul className="space-y-2">
              {categories.map((category, index) => (
                <li key={index} className="flex justify-between items-center text-gray-600">
                  <a href="#" className="hover:text-red-600">{category.name}</a>
                  <span className="text-gray-400">({category.count})</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Product tags */}
          <div className="mb-8">
            <h3 className="text-lg font-medium mb-4">Product tags</h3>
            <div className="flex flex-wrap gap-2">
              <a 
                href="#" 
                className="bg-gray-100 text-gray-600 px-3 py-1 text-sm uppercase rounded-md hover:bg-gray-200"
              >
                NEW BALANCE 550
              </a>
            </div>
          </div>
        </div>

        {/* Product Grid */}
        <div className="w-full md:w-3/4">
          <div className="flex justify-between items-center mb-6">
            <div></div>
            <select className="border border-gray-300 rounded px-4 py-2 bg-white">
              <option>Default sorting</option>
              <option>Sort by popularity</option>
              <option>Sort by price: low to high</option>
              <option>Sort by price: high to low</option>
            </select>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product) => (
              <div key={product.id} className="group">
                <div className="relative overflow-hidden mb-3">
                  <span className="absolute top-2 left-2 bg-red-600 text-white text-xs font-bold px-2 py-1 z-10">
                    -{product.discount}%
                  </span>
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-60 object-contain hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <h3 className="text-sm uppercase font-medium text-gray-700 mb-1">{product.name}</h3>
                <div className="flex items-center space-x-2">
                  <span className="text-red-600 font-bold">R{product.salePrice.toFixed(2)}</span>
                  <span className="text-gray-400 line-through text-sm">R{product.regularPrice.toFixed(2)}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Pagination */}
          <div className="flex justify-center items-center mt-10 space-x-2">
            <button className="h-8 w-8 flex items-center justify-center rounded-full bg-black text-white">1</button>
            <button className="h-8 w-8 flex items-center justify-center rounded-full hover:bg-gray-200">2</button>
            <button className="h-8 w-8 flex items-center justify-center rounded-full hover:bg-gray-200">NEXT</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shop;
