'use client'
import Image from "next/image";
import Navbar from "../Sections/Navbar";
import Footer from "../Sections/footer";

const Home = () => {
    return (
        <>
            <Navbar />
            <div className="relative h-60 md:h-80 overflow-hidden">
                <Image
                    alt="hero"
                    loading="lazy"
                    width="1920"
                    height="180"
                    decoding="async"
                    data-nimg="1"
                    className="w-full h-full object-cover"
                    src="/images/aboutus.jpg"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                    <p className="text-3xl md:text-4xl font-bold text-white">About Us</p>
                </div>
            </div>
            <div className="b" style={{ paddingTop: '-10px', paddingBottom: '50px' }}></div>
            <div className="py-20">
                <div className="container mx-auto flex flex-col md:flex-row items-center md:space-x-8">
                    <Image src="/images/about.gif" alt="" width={500} height={300} className="w-full md:w-1/2 mb-8 md:mb-0" unoptimized />
                    <div className="md:w-1/2">
                        <h1 className="text-4xl font-bold mb-4 text-light-red">Welcome To Spice N&apos; Oil</h1>
                        <p className="text-lg" style={{ fontSize: '20px' }}>Founded in 2014, Spice N&apos; Oil has emerged as a reputable business entity, catering to customers around the world. We take pride in offering an extensive range of products that include a variety of food items and toiletries. Our product portfolio boasts well-known brands of tea as well as coffee. Additionally, we provide a selection of noodles and vermicelli, along with a delightful assortment of pickles and branded spice mixes. What sets Spice N&apos; Oil apart is our commitment to quality and variety.
                            Our reach extends far and wide, with customers hailing from various corners of the globe. We proudly serve clients not only in our own country but also in the United States, Canada, and numerous European countries. At Spice N&apos; Oil, we strive to bring the flavors and products of India to discerning customers worldwide, ensuring that they can enjoy the tastes they love, no matter where they are located</p>
                    </div>
                </div>
            </div>
            <div id="intro-page" className="py-20 bg-gray-100 text-center">
                <h1 className="text-4xl font-bold mb-8">Our Team</h1>
                <div className="mt-8 flex flex-wrap justify-center items-center">
                    <div className="flex flex-col items-center mx-4">
                        <Image src="/images/ceo.jpeg" alt="" width="200" height="200" className="inline-block w-40 h-40 rounded-full mb-2" />
                        <h2 className="text-xl font-bold">Mr.Sreeraja Chokkar</h2>
                        <h3 className="text-lg">Chief Executive Officer</h3>
                    </div>
                    <div className="flex flex-col items-center mx-4">
                        <Image src="/images/sole.jpg" alt="" width="200" height="200" className="inline-block w-40 h-40 rounded-full mb-2" />
                        <h2 className="text-xl font-bold">Mr.Shivaraja Sreeraja</h2>
                        <h3 className="text-lg">Sole Proprietor</h3>
                    </div>
                </div>
            </div>
            <div className='bg-light-red'>
                <Footer />
            </div>
        </>
    );
}

export default Home;
