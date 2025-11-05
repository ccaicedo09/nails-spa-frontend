import React, { useState, useEffect } from 'react';

import image10 from '/img/test_img_10.png';
import image2 from '/img/test_img_2.png';
import image3 from '/img/test_img_3.png';
import image4 from '/img/test_img_4.png';

const Carrousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const images = [
    { src: image10, alt: "macOS Yosemite Wallpaper" },
    { src: image2, alt: "macOS Yosemite Wallpaper" },
    { src: image3, alt: "macOS El Capitan Wallpaper" },
    { src: image4, alt: "macOS El Capitan Wallpaper" }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + images.length) % images.length);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  // Auto-play
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000); // Cambia cada 5 segundos
    
    return () => clearInterval(interval);
  }, [currentSlide]);

  return (
    <div className="relative w-full overflow-hidden rounded">
      <div className="relative h-64 md:h-96">
        {images.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-500 ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <img
              src={image.src}
              alt={image.alt}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>

      <button
        onClick={prevSlide}
        className="absolute left-2 top-1/2 transform -translate-y-1/2 inline-flex items-center justify-center rounded-full border border-transparent w-10 h-10 text-xl font-bold transition-colors bg-white/80 text-gray-900 hover:bg-white shadow-lg cursor-pointer z-10"
        aria-label="Imagen anterior"
      >
        ‹
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-2 top-1/2 transform -translate-y-1/2 inline-flex items-center justify-center rounded-full border border-transparent w-10 h-10 text-xl font-bold transition-colors bg-white/80 text-gray-900 hover:bg-white shadow-lg cursor-pointer z-10"
        aria-label="Imagen siguiente"
      >
        ›
      </button>

      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2 z-10">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-2 h-2 rounded-full transition-all cursor-pointer ${
              index === currentSlide 
                ? 'bg-white w-6' 
                : 'bg-white/50 hover:bg-white/75'
            }`}
            aria-label={`Ir a imagen ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Carrousel;