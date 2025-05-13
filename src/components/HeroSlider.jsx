import React, { useState, useEffect, useCallback } from 'react';
import slide1 from '../assets/slide-1.png';
import slide2 from '../assets/slide-2.png';
import slide3 from '../assets/slide-3.png';

const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    {
      id: 1,
      image: slide1,
      title: "BE ON THE GO WITH THE BEST KICKS",
    },
    {
      id: 2,
      image: slide2,
      title: "BE ON THE GO WITH THE BEST KICKS",
    },
    {
      id: 3,
      image: slide3,
      title: "BE ON THE GO WITH THE BEST KICKS",
    }
  ];

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  }, [slides.length]);

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  // Auto slide change every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(interval);
  }, [nextSlide]);

  return (
    <section className="relative h-[90vh] overflow-hidden">
      <div className="h-full w-full relative">
        {/* Slides */}
        <div className="h-full">
          {slides.map((slide, index) => (
            <div
              key={slide.id}
              className={`absolute top-0 left-0 w-full h-full transition-opacity duration-700 ease-in-out
                ${index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
            >
              {/* Image Background - Full Cover */}
              <img
                src={slide.image}
                alt={`Slide ${slide.id} background`}
                className="absolute w-full h-full object-cover object-center"
                style={{ backgroundColor: '#d40000' }}
              />
              
              {/* Content Overlay */}
              <div className="relative h-full w-full z-20 flex flex-col md:flex-row">
                {/* Text Content */}
                <div className="md:w-1/2 flex flex-col justify-center px-8 md:px-16 py-10 md:py-0">
                  <div className="bg-black/60 inline-block px-6 py-4 md:px-8 md:py-6 backdrop-blur-sm">
                    <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-2 text-white leading-tight tracking-tight drop-shadow-lg">
                      {slide.title.split(' ').map((word, i) => (
                        <React.Fragment key={i}>
                          {word} {i % 3 === 2 && <br />}
                        </React.Fragment>
                      ))}
                    </h1>
                  </div>
                  <button className="bg-black text-white px-4 py-2 rounded-md w-32 font-medium mt-4 hover:bg-gray-800 transition-colors duration-300">
                    Shop Now
                  </button>
                </div>
                
                {/* Empty div to maintain layout */}
                <div className="md:w-1/2 h-full"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 z-20 bg-black/30 hover:bg-black/50 text-white p-2 rounded-full"
          aria-label="Previous slide"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
          </svg>
        </button>
        
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 z-20 bg-black/30 hover:bg-black/50 text-white p-2 rounded-full"
          aria-label="Next slide"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
          </svg>
        </button>

        {/* Dot Indicators */}
        <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-20 flex space-x-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                index === currentSlide ? 'bg-white' : 'bg-white/50'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSlider;
