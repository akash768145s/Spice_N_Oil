'use client'
import React from "react";
import { ParallaxScroll } from "@/components/ui/parallax-scroll";
import Navbar from "../Sections/Navbar";


const App: React.FC = () => {
    const images: string[] = [
        "/images/coffee.jpeg",
        "/images/appalam.jpeg",
        "/images/chilli.jpeg",
        "/images/coconutoil.jpeg",
        "/images/dhal.jpeg",
        "/images/ghee.jpeg",
        "/images/gingily.jpeg",
        "/images/hotdrink.jpeg",
        "/images/jam.jpeg",
        "/images/mustardoil.jpeg",
        "/images/noodles.jpeg",
        "/images/poojaitems.jpeg",
        "/images/rice.jpeg",
        "/images/salt.jpeg",
        "/images/soap.jpeg",
        "/images/spices.jpeg",
        "/images/sunflower-oil.jpeg",
        "/images/sweets.jpeg",
        "/images/tea.jpg",
        "/images/virgin-Coconut.jpeg"
    ];

    return (
        <>
            <div className="flex flex-col min-h-screen overflow-hidden">
                <Navbar />
                <div className="flex-1 overflow-hidden">
                    <div className="relative h-60 md:h-80 overflow-hidden">
                        <img
                            alt="hero"
                            loading="lazy"
                            width="1920"
                            height="1080"
                            decoding="async"
                            data-nimg="1"
                            className="w-full h-full object-cover"
                            src="/images/spices.jpeg"
                        />
                        <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                            <p className="text-3xl md:text-4xl font-bold text-white">Products</p>
                        </div>
                    </div>

                    <h1 className="text-3xl md:text-4xl font-bold text-center mt-4 md:mt-8 mb-4 md:mb-8 text-light-red">Our Products</h1>
                    <div className="overflow-hidden"> {/* Add overflow-hidden here */}
                        <ParallaxScroll images={images} />
                    </div>
                </div>
            </div>
        </>
    );
};

export default App;
