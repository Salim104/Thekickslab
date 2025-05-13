import React from 'react';
import slide1 from '../assets/slide-1.png';

const Hero = () => {
  return (
    <section className="bg-[#D90000] text-white relative overflow-hidden h-[90vh]">
      <div className="h-full w-full flex flex-col md:flex-row">
        <div className="md:w-1/2 z-10 pt-16 md:pt-0 flex flex-col justify-center px-8 md:px-16">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight leading-tight">
            BE ON THE GO<br />
            WITH THE BEST<br />
            KICKS
          </h1>
          <button className="bg-black text-white px-6 py-2 mt-2 w-32 hover:bg-gray-800 transition duration-300 font-medium rounded-none text-sm">
            Shop Now
          </button>
        </div>
        <div className="md:w-1/2 h-full flex items-end justify-center overflow-hidden">
          <img 
            src={slide1} 
            alt="Nike Red Shoes" 
            className="w-full h-full object-contain object-bottom md:object-center"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
