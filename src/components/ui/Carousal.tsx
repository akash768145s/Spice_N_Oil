import React, { useState } from "react";

interface Slide {
    src: string;
    alt: string;
}

const MyComponent: React.FC = () => {
    const slides: Slide[] = [
        { src: '/images/chilli.gif', alt: 'Image 1' },
        { src: '/images/3.jpg', alt: 'Image 2' },
        { src: '/images/200.gif', alt: 'Image 3' },
        { src: '/images/7.gif', alt: 'Image 4' }
    ];

    const [activeSlideIndex, setActiveSlideIndex] = useState(0);

    const goToSlide = (index: number) => {
        setActiveSlideIndex(index);
    };

    const goToPrevSlide = () => {
        const newIndex = (activeSlideIndex - 1 + slides.length) % slides.length;
        setActiveSlideIndex(newIndex);
    };

    const goToNextSlide = () => {
        const newIndex = (activeSlideIndex + 1) % slides.length;
        setActiveSlideIndex(newIndex);
    };

    return (
        <div id="carouselExampleIndicators" className="relative" data-twe-carousel-init data-twe-ride="carousel">
            {/* Carousel indicators */}
            <div className="absolute bottom-0 left-0 right-0 z-[2] mx-[15%] mb-4 flex list-none justify-center p-0" data-twe-carousel-indicators>
                {slides.map((slide, index) => (
                    <button
                        key={index}
                        type="button"
                        data-twe-target="#carouselExampleIndicators"
                        data-twe-slide-to={index.toString()}
                        data-twe-carousel-active={index === activeSlideIndex ? true : undefined}
                        className="mx-[3px] box-content h-[3px] w-[30px] flex-initial cursor-pointer border-0 border-y-[10px] border-solid border-transparent bg-white bg-clip-padding p-0 -indent-[999px] opacity-50 transition-opacity duration-[600ms] ease-[cubic-bezier(0.25,0.1,0.25,1.0)] motion-reduce:transition-none"
                        aria-current={index === activeSlideIndex ? "true" : undefined}
                        aria-label={`Slide ${index + 1}`}
                        onClick={() => goToSlide(index)}
                    ></button>
                ))}
            </div>

            {/* Carousel items */}
            <div className="relative w-full overflow-hidden after:clear-both after:block after:content-['']">
                {slides.map((slide, index) => (
                    <div
                        key={index}
                        className={`relative float-left -mr-[100%] ${index === activeSlideIndex ? '' : 'hidden'} w-full md:w-[712px] md:h-[408px] transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none`}
                        data-twe-carousel-item
                        data-twe-carousel-active={index === activeSlideIndex ? true : undefined}
                    >
                        <img src={slide.src} className="block w-full h-auto md:h-[408px]" alt={slide.alt} />
                    </div>
                ))}
            </div>

            {/* Carousel controls - prev item */}
            <button
                className="absolute bottom-0 left-0 top-0 z-[1] flex w-[15%] items-center justify-center border-0 bg-none p-0 text-center text-white opacity-50 transition-opacity duration-150 ease-[cubic-bezier(0.25,0.1,0.25,1.0)] hover:text-white hover:no-underline hover:opacity-90 hover:outline-none focus:text-white focus:no-underline focus:opacity-90 focus:outline-none motion-reduce:transition-none"
                type="button"
                data-twe-target="#carouselExampleIndicators"
                data-twe-slide="prev"
                onClick={goToPrevSlide}
            >
                <span className="inline-block h-8 w-8">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.75 19.5L8.25 12l7.5-7.5" />
                    </svg>
                </span>
                <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">Previous</span>
            </button>

            {/* Carousel controls - next item */}
            <button
                className="absolute bottom-0 right-0 top-0 z-[1] flex w-[15%] items-center justify-center border-0 bg-none p-0 text-center text-white opacity-50 transition-opacity duration-150 ease-[cubic-bezier(0.25,0.1,0.25,1.0)] hover:text-white hover:no-underline hover:opacity-90 hover:outline-none focus:text-white focus:no-underline focus:opacity-90 focus:outline-none motion-reduce:transition-none"
                type="button"
                data-twe-target="#carouselExampleIndicators"
                data-twe-slide="next"
                onClick={goToNextSlide}
            >
                <span className="inline-block h-8 w-8">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 19.5L17.25 12l-7.5-7.5" />
                    </svg>
                </span>
                <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">Next</span>
            </button>
        </div>
    );
};

export default MyComponent;
