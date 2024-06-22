import { useEffect, useState } from 'react';
import Image from 'next/image';

interface Slide {
  src: string;
  alt: string;
}

interface CarouselProps {
  slides: Slide[];
  imageWidth: number;
  imageHeight: number;
}

const Carousel = ({ slides, imageWidth, imageHeight }: CarouselProps) => {
  const [activeSlide, setActiveSlide] = useState(0);
  const [loadingNextSlide, setLoadingNextSlide] = useState(false);
  const constantWidth = 713;
  const constantHeight = 402;

  const nextSlide = () => {
    setLoadingNextSlide(true);
    setTimeout(() => {
      setActiveSlide((prevSlide) => (prevSlide === slides.length - 1 ? 0 : prevSlide + 1));
      setLoadingNextSlide(false);
    }, 500); // Change the timeout duration as needed
  };

  const prevSlide = () => {
    setActiveSlide((prevSlide) => (prevSlide === 0 ? slides.length - 1 : prevSlide - 1));
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 4000);
  
    return () => clearInterval(interval);
  }, [activeSlide, nextSlide]); 
  

  return (
    <div className="hidden lg:block lg:w-1/2">
      <div className="carousel w-full relative">
        {slides.map((slide: Slide, index: number) => (
          <div key={index} className={`carousel-item relative w-full ${index === activeSlide ? 'block' : 'hidden'}`}>
            {loadingNextSlide && index === (activeSlide + 1) % slides.length && (
              <div className="loading-lines absolute inset-0 flex items-center justify-center">
                <div className="line bg-gray-400 h-1 w-8 rounded-full mx-1 animate-pulse"></div>
                <div className="line bg-gray-400 h-1 w-8 rounded-full mx-1 animate-pulse"></div>
                <div className="line bg-gray-400 h-1 w-8 rounded-full mx-1 animate-pulse"></div>
              </div>
            )}
            <Image src={slide.src} alt={slide.alt} width={constantWidth} height={constantHeight} className='w-full' unoptimized />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <button onClick={prevSlide} className="btn btn-circle">❮</button>
              <button onClick={nextSlide} className="btn btn-circle">❯</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
