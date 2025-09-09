import React, { useState, useEffect, useCallback } from 'react';
import { ChevronLeftIcon, ChevronRightIcon } from '../icons/Icons';

interface CarouselProps {
  slides: React.ReactNode[];
  autoPlayInterval?: number;
}

export const Carousel: React.FC<CarouselProps> = ({ slides, autoPlayInterval = 5000 }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = useCallback(() => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  }, [currentIndex, slides.length]);

  const nextSlide = useCallback(() => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  }, [currentIndex, slides.length]);

  const goToSlide = (slideIndex: number) => {
    setCurrentIndex(slideIndex);
  };

  useEffect(() => {
    if (autoPlayInterval) {
      const timer = setTimeout(nextSlide, autoPlayInterval);
      return () => clearTimeout(timer);
    }
  }, [currentIndex, nextSlide, autoPlayInterval]);

  return (
    <div className="relative h-64 md:h-80 w-full overflow-hidden rounded-lg group mb-12">
      <div
        className="relative h-full w-full flex transition-transform ease-out duration-500"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {slides.map((slide, index) => (
          <div key={index} className="w-full h-full flex-shrink-0">
            {slide}
          </div>
        ))}
      </div>

      {/* Left Arrow */}
      <div className="hidden group-hover:block absolute top-1/2 -translate-y-1/2 left-5 text-2xl rounded-full p-2 bg-black/40 text-white cursor-pointer">
        <button onClick={prevSlide} aria-label="Previous Slide"><ChevronLeftIcon /></button>
      </div>
      {/* Right Arrow */}
      <div className="hidden group-hover:block absolute top-1/2 -translate-y-1/2 right-5 text-2xl rounded-full p-2 bg-black/40 text-white cursor-pointer">
        <button onClick={nextSlide} aria-label="Next Slide"><ChevronRightIcon /></button>
      </div>

      {/* Dot Indicators */}
      <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex space-x-2">
        {slides.map((_, slideIndex) => (
          <button
            key={slideIndex}
            onClick={() => goToSlide(slideIndex)}
            aria-label={`Go to slide ${slideIndex + 1}`}
            className={`w-3 h-3 rounded-full transition-colors ${
              currentIndex === slideIndex ? 'bg-f1-red' : 'bg-gray-400/50 hover:bg-gray-400'
            }`}
          ></button>
        ))}
      </div>
    </div>
  );
};
