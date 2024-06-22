'use client'
import Navbar from './Sections/Navbar';
import Link from 'next/link';
import Footer from './Sections/footer';
import Image from 'next/image';
import { Button } from '@/components/ui/moving-border';
import { TypewriterEffectSmooth } from '@/components/ui/typewriter-effect';
import { useEffect, useState } from 'react';
import MyComponent from '@/components/ui/Carousal';


const Home: React.FC = () => {

  const words = [
    {
      text: "Spice",
      className: "text-light-red text-9xl lg:text-10xl xl:text-11xl font-normal", // Adjusted font size to maximum using text-11xl class
    },
    {
      text: "N'",
      className: "text-light-red text-9xl lg:text-10xl xl:text-11xl font-normal",
      style: { marginRight: '1em' } // Increased spacing between words
    },
    {
      text: "Oil",
      className: "text-light-red text-9xl lg:text-10xl xl:text-11xl font-normal",
    },
  ];
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768); // Change the breakpoint according to your design
    };

    handleResize(); // Initial check
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  return (
    <>
      <Navbar />

      <div className='bg-tilt lg:h-screen'>
        <div className="py-20 bg-tilt">
          <div className="container mx-auto flex flex-col lg:flex-row items-center justify-center px-4 lg:px-0 lg:pl-8 lg:h-full mt-20">
            <div className="lg:w-1/2 flex flex-col justify-center text-center lg:text-left relative mt-12 lg:mt-0">
              <div className="relative">
                <Image src="/images/chillie.png" alt="Chilli" width="110" height="110" className={`absolute left-1/2 transform -translate-x-1/2 lg:w-32 top-0 lg:top-1/6 md:top-1/12 ${isMobile ? '-translate-y-1/4' : '-translate-y-3/4'}`} />
                {isMobile ? (
                  <h1 className="text-6xl lg:text-9xl font-light text-red-500 mb-4 lg:mb-6 tracking-wide">Spice N' Oil</h1>
                ) : (
                  <div className="lg:w-1/2 lg:ml-28 xl:ml-40 flex items-center justify-center mt-12 lg:mt-0">
                    <TypewriterEffectSmooth words={words} />
                  </div>
                )}
                <h4 className="absolute left-1/2 top-5/6 transform -translate-x-1/2 -translate-y-1/2 text-lg lg:text-3xl font-semibold text-black-500">|Imports & Exports|</h4>
              </div>
              <div className="flex flex-col lg:flex-row items-center justify-center space-y-4 lg:space-y-0 lg:space-x-4 mt-12 lg:mt-12">
                <Link href="/products">
                  <Button className="px-4 py-2 bg-red-600 text-white hover:bg-red-700 transition duration-300 text-base font-bold">Our Products</Button>
                </Link>
                <Link href="/contact">
                  <Button className="px-4 py-2 border border-red-600 text-red-600 hover:bg-red-600 hover:text-white transition duration-300 text-base bg-white font-bold">Contact Us</Button>
                </Link>
              </div>
            </div>
            <MyComponent />
          </div>
        </div>
      </div>
      











      <div id="abt-us" className="py-20">
        <div className="container mx-auto flex flex-col md:flex-row items-center md:space-x-8">
          <Image src="/images/1.gif" alt="" width={640} height={360} className="w-full md:w-1/2 mb-8 md:mb-0" unoptimized />
          <div className="md:w-1/2">
            <h1 className="text-4xl font-bold mb-4">Welcome To Spice N&apos; Oil</h1>
            <p className="text-lg" style={{ fontSize: '20px' }}>
              Established in 1996, Spice N&apos; Oil is a reckoned business entity making available a wide range of products in the global markets. We provide multiple assorted food products and toiletries which include various brands of tea (3 Roses, Red label etc.), coffee (Bru, Narasus etc.), noodles, vermicelli (Anil, MTR etc.), pickles, branded spice mixes and pickles (Sakthi masala) apart from other products such as South Indian snacks (Grand Sweets and Snacks).
            </p>
          </div>
        </div>
      </div>
      <div className='bg-light-red'>
        <Footer />
      </div>
    </>
  );
};

export default Home;
