import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Shop from '../pages/Shop';
import Contact from '../pages/Contact';
import ProductDetail from '../pages/ProductDetail';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/shop" element={<Shop />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/product/:id" element={<ProductDetail />} />
    </Routes>
  );
};

export default AppRoutes;
