import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import productsData from '../data/products.json';
import { useCart } from '../features/cart/CartContext';
import { useWishlist } from '../features/wishlist/WishlistContext';

// Import icons as needed
import { FaHeart, FaArrowLeft, FaArrowRight } from 'react-icons/fa';

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [mainImage, setMainImage] = useState(0);
  const [activeTab, setActiveTab] = useState('description');
  const [relatedProducts, setRelatedProducts] = useState([]);
  const { addItem } = useCart();
  const { addToWishlist, isInWishlist } = useWishlist();

  useEffect(() => {
    // Find the product by ID
    const productId = parseInt(id);
    let foundProduct = productsData.products.find(p => p.id === productId);
    
    // If no product found with that ID, use the first product as fallback
    if (!foundProduct && productsData.products.length > 0) {
      // If the product isn't found based on ID, use the name as a fallback search
      // This helps when products from ShopAll/BestSelling have different IDs
      // but same or similar names as in products.json
      const productsByName = productsData.products.filter(p => 
        p.name.toLowerCase().includes('nike') || 
        p.name.toLowerCase().includes('jordan') || 
        p.name.toLowerCase().includes('adidas') ||
        p.name.toLowerCase().includes('new balance')
      );
      
      // Use the first matching product by brand or a default
      foundProduct = productsByName.length > 0 ? 
        productsByName[productId % productsByName.length] : // Use modulo to cycle through available products
        productsData.products[0]; // Fallback to first product
    }
    
    if (foundProduct) {
      setProduct(foundProduct);
      
      // Find related products (same brand or category)
      const related = productsData.products
        .filter(p => p.id !== foundProduct.id && (p.brand === foundProduct.brand || p.category === foundProduct.category))
        .slice(0, 3); // Get max 3 related products
      
      setRelatedProducts(related);
    }
  }, [id]);

  const handleQuantityChange = (action) => {
    if (action === 'increment') {
      setQuantity(prev => prev + 1);
    } else if (action === 'decrement' && quantity > 1) {
      setQuantity(prev => prev - 1);
    }
  };

  // Function to format price with commas
  const formatPrice = (price) => {
    return price.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  if (!product) {
    return <div className="min-h-screen flex items-center justify-center">Loading...</div>;
  }

  // Fix image paths by dynamically importing images
  const getImageUrl = (imagePath) => {
    if (!imagePath) return '';
    
    // Extract just the file name from the path
    const fileName = imagePath.split('/').pop();
    
    // For demo purposes, use a placeholder if the image can't be found
    try {
      // Create a relative path to the assets directory
      return new URL(`../assets/${fileName}`, import.meta.url).href;
    } catch (error) {
      console.error('Error loading image:', error);
      return 'https://via.placeholder.com/300';
    }
  };

  // Generate multiple product images (for demo purposes)
  const productImages = [
    getImageUrl(product.image),
    getImageUrl(product.image), // Duplicated for demo purposes
    getImageUrl(product.image), // Duplicated for demo purposes
    getImageUrl(product.image)  // Duplicated for demo purposes
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Breadcrumbs */}
      <div className="text-sm text-gray-500 mb-8">
        <Link to="/" className="hover:text-red-600">Home</Link> / 
        <Link to="/shop" className="hover:text-red-600 mx-1">All</Link> / 
        <span className="text-black">{product.name}</span>
      </div>

      {/* Product Section */}
      <div className="flex flex-col md:flex-row gap-8 mb-16">
        {/* Left side - Product Images */}
        <div className="w-full md:w-1/2 relative">
          {/* Main Image */}
          <div className="mb-4 relative">
            <img 
              src={productImages[mainImage]} 
              alt={product.name} 
              className="w-full h-auto object-contain"
            />
            
            {/* Navigation arrows */}
            <button 
              onClick={() => setMainImage(prev => (prev === 0 ? productImages.length - 1 : prev - 1))}
              className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md"
            >
              <FaArrowLeft className="text-gray-700" />
            </button>
            <button 
              onClick={() => setMainImage(prev => (prev === productImages.length - 1 ? 0 : prev + 1))}
              className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md"
            >
              <FaArrowRight className="text-gray-700" />
            </button>
          </div>
          
          {/* Thumbnail Images */}
          <div className="flex space-x-2">
            {productImages.map((img, index) => (
              <div 
                key={index}
                className={`border-2 cursor-pointer ${mainImage === index ? 'border-black' : 'border-gray-200'}`}
                onClick={() => setMainImage(index)}
              >
                <img src={img} alt={`Thumbnail ${index + 1}`} className="w-20 h-20 object-contain" />
              </div>
            ))}
          </div>
        </div>

        {/* Right side - Product Details */}
        <div className="w-full md:w-1/2">
          <h1 className="text-2xl font-bold mb-4">{product.name}</h1>
          
          {/* Price */}
          <div className="flex items-center space-x-3 mb-6">
            <span className="text-xl font-bold">R{formatPrice(product.salePrice)}</span>
            {product.discount > 0 && (
              <span className="text-gray-500 line-through">R{formatPrice(product.regularPrice)}</span>
            )}
            {product.discount > 0 && (
              <span className="bg-red-600 text-white px-2 py-1 text-xs font-bold">
                -{product.discount}%
              </span>
            )}
          </div>

          {/* Quantity Selector */}
          <div className="flex items-center space-x-4 mb-6">
            <div className="flex items-center border border-gray-300">
              <button 
                onClick={() => handleQuantityChange('decrement')}
                className="px-3 py-2 border-r border-gray-300 hover:bg-gray-100"
              >
                -
              </button>
              <input 
                type="text" 
                value={quantity} 
                readOnly
                className="w-12 py-2 text-center"
              />
              <button 
                onClick={() => handleQuantityChange('increment')}
                className="px-3 py-2 border-l border-gray-300 hover:bg-gray-100"
              >
                +
              </button>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="space-y-4 mb-8">
            <button 
              onClick={() => {
                const productToAdd = {
                  ...product,
                  quantity: quantity
                };
                addItem(productToAdd);
              }} 
              className="w-full bg-black text-white py-3 px-6 hover:bg-gray-800 transition duration-300"
            >
              ADD TO CART
            </button>
            
            <button 
              onClick={() => addToWishlist(product)}
              className="flex items-center justify-center space-x-2 w-full border border-gray-300 py-3 px-6 hover:bg-gray-50 transition duration-300"
            >
              <FaHeart className="text-red-600" />
              <span>{isInWishlist(product.id) ? 'Remove from Wishlist' : 'Add to Wishlist'}</span>
            </button>
            
            <Link to="/shop" className="block text-center w-full border border-gray-300 py-3 px-6 hover:bg-gray-50 transition duration-300">
              Continue Shopping
            </Link>
          </div>

          {/* Categories */}
          <div className="text-sm text-gray-600 mb-6">
            <p>Categories: <span className="capitalize">{product.category}</span></p>
          </div>
        </div>
      </div>

      {/* Tabs Section */}
      <div className="mb-16">
        <div className="flex border-b border-gray-300 mb-6">
          <button 
            className={`px-6 py-3 text-sm font-medium ${activeTab === 'description' ? 'border-b-2 border-black' : ''}`}
            onClick={() => setActiveTab('description')}
          >
            Description
          </button>
          <button 
            className={`px-6 py-3 text-sm font-medium ${activeTab === 'reviews' ? 'border-b-2 border-black' : ''}`}
            onClick={() => setActiveTab('reviews')}
          >
            Reviews (0)
          </button>
        </div>

        <div>
          {activeTab === 'description' && (
            <div className="prose max-w-none">
              <p>
                The {product.name} features a sleek design with premium materials and exceptional comfort. 
                Perfect for both casual wear and athletic activities, these sneakers combine style and functionality.
              </p>
              <p className="mt-4">
                Featuring a durable rubber outsole, breathable upper, and supportive midsole, these shoes offer excellent support 
                while maintaining a fashionable appearance. The {product.brand} branding adds a touch of authenticity to this 
                iconic design.
              </p>
            </div>
          )}
          {activeTab === 'reviews' && (
            <div>
              <p>There are no reviews yet.</p>
            </div>
          )}
        </div>
      </div>

      {/* Related Products */}
      <div>
        <h2 className="text-2xl font-bold mb-8">Related products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {relatedProducts.map((product) => (
            <div key={product.id} className="group">
              <Link to={`/product/${product.id}`}>
                <div className="relative overflow-hidden mb-3">
                  {product.discount > 0 && (
                    <span className="absolute top-2 left-2 bg-red-600 text-white text-xs font-bold px-2 py-1 z-10">
                      -{product.discount}%
                    </span>
                  )}
                  <img 
                    src={getImageUrl(product.image)} 
                    alt={product.name}
                    className="w-full h-60 object-contain hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <h3 className="text-sm uppercase font-medium text-gray-700 mb-1">{product.name}</h3>
                <div className="flex items-center space-x-2">
                  <span className="text-red-600 font-bold">R{formatPrice(product.salePrice)}</span>
                  {product.discount > 0 && (
                    <span className="text-gray-400 line-through text-sm">R{formatPrice(product.regularPrice)}</span>
                  )}
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
