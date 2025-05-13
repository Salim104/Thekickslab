import React from 'react';
import Hero from '../sections/Hero';
import Features from '../sections/Features';
import BestSelling from '../sections/BestSelling';
import Deals from '../sections/Deals';
import ShopAll from '../sections/ShopAll';

const Home = () => {
  return (
    <>
      <Hero />
      <Features />
      <BestSelling />
      <Deals />
      <ShopAll />
    </>
  );
};

export default Home;
