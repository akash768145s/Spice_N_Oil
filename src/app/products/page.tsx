
'use client'
import Card from "@/components/ui/Card";
import React from "react";
import Navbar from "../Sections/Navbar";
import Footer from "../Sections/footer";
import Image from "next/image";
interface CardProps {
    image: string;
    productName: string;
    productInfo: string;
}
const App: React.FC = () => {
    const cardsData: CardProps[] = [
        {
            image: "/images/coffee.jpeg",
            productName: "Coffee",
            productInfo: "Coffee is a beverage brewed from roasted coffee beans. Darkly colored, bitter, and slightly acidic, coffee has a stimulating effect on humans, primarily due to its caffeine content. It has the highest sales in the world market for hot drinks."
        },
        {
            image: "/images/appalam.jpeg",
            productName: "Appalam",
            productInfo: "Appalam is a thin, crisp, disc-shaped Indian food typically made from lentil flour, salt, and spices. It is often served as an accompaniment to a meal or as a snack."
        },
        {
            image: "/images/chilli.jpeg",
            productName: "Chilli",
            productInfo: "Chilli is the fruit of plants from the genus Capsicum which are members of the nightshade family, Solanaceae. Chilli peppers are widely used in many cuisines to add spice and flavor to dishes."
        },
        {
            image: "/images/coconutoil.jpeg",
            productName: "Coconut Oil",
            productInfo: "Coconut oil is an edible oil extracted from the kernel or meat of mature coconuts harvested from the coconut palm. It has various applications in cooking, skincare, haircare, and as a dietary supplement."
        },
        {
            image: "/images/dhal.jpeg",
            productName: "Dhal",
            productInfo: "Dhal, also spelled as dal or daal, is a term used for dried, split pulses (legumes) such as lentils, peas, and beans. It is a staple food in Indian cuisine and is often served with rice or bread."
        },
        {
            image: "/images/ghee.jpeg",
            productName: "Ghee",
            productInfo: "Ghee is a class of clarified butter that originated in ancient India. It is commonly used in Indian cuisine, traditional medicine, and religious rituals. Ghee has a high smoke point and is praised for its rich flavor and nutritional benefits."
        },
        {
            image: "/images/gingily.jpeg",
            productName: "Gingelly Oil",
            productInfo: "Gingelly oil, also known as sesame oil, is an edible vegetable oil derived from sesame seeds. It is commonly used in cooking, particularly in Asian and Middle Eastern cuisines, for its distinct nutty flavor and aroma."
        },
        {
            image: "/images/hotdrink.jpeg",
            productName: "Hot Drink",
            productInfo: "A hot drink is a beverage that is typically served hot or warm, often in contrast to cold beverages. Common hot drinks include tea, coffee, hot chocolate, and various types of herbal teas. They are consumed for their soothing and warming effects."
        },
        {
            image: "/images/jam.jpeg",
            productName: "Jam",
            productInfo: "Jam is a thick, spreadable fruit product made by cooking fruit with sugar to preserve it. It is commonly used as a topping for bread, toast, pancakes, and pastries. Jams are available in a variety of flavors and can be homemade or commercially produced."
        },
        {
            image: "/images/mustardoil.jpeg",
            productName: "Mustard Oil",
            productInfo: "Mustard oil is a vegetable oil derived from mustard seeds. It is commonly used in Indian cuisine, particularly in the eastern regions, as a cooking oil, flavor enhancer, and pickling agent. Mustard oil has a strong, pungent flavor and is rich in monounsaturated fats and omega-3 fatty acids."
        },
        {
            image: "/images/noodles.jpeg",
            productName: "Noodles",
            productInfo: "Noodles are a type of staple food made from unleavened dough that is stretched, extruded, or rolled flat and cut into various shapes. They are commonly boiled or cooked in a broth or sauce and are a staple in many cultures around the world. Noodles can be made from wheat, rice, buckwheat, or other grains."
        },
        {
            image: "/images/poojaitems.jpeg",
            productName: "Pooja Items",
            productInfo: "Pooja items, also known as puja items, are accessories and materials used in Hindu worship rituals, known as puja. These items may include incense sticks, camphor, coconut, flowers, fruits, sacred ash (vibhuti), lamps (diyas), bells, and various other offerings used to invoke the blessings of deities and enhance spiritual practices."
        },
        {
            image: "/images/rice.jpeg",
            productName: "Rice",
            productInfo: "Rice is the seed of the grass species Oryza sativa or Oryza glaberrima. As a cereal grain, it is the most widely consumed staple food for a large part of the world's human population, especially in Asia. Rice can be cooked in various ways and is a fundamental component of many cuisines worldwide."
        },
        {
            image: "/images/salt.jpeg",
            productName: "Salt",
            productInfo: "Salt is a mineral composed primarily of sodium chloride (NaCl), a chemical compound belonging to the larger class of salts. It is essential for life in animals, including humans, and is used in food seasoning, preservation, and as a food preservative. Salt is also used in various industrial processes and has cultural and symbolic significance in many societies."
        },
        {
            image: "/images/soap.jpeg",
            productName: "Soap",
            productInfo: "Soap is a cleansing agent made from the reaction between fats or oils and an alkali, such as sodium hydroxide or potassium hydroxide. It is used for washing and cleaning purposes, including personal hygiene, household cleaning, and laundry. Soap comes in various forms, including bar soap, liquid soap, and powdered soap, and can be scented or unscented."
        },
        {
            image: "/images/spices.jpeg",
            productName: "Spices",
            productInfo: "Spices are aromatic substances derived from the seeds, fruits, roots, bark, or other parts of plants. They are used to flavor and season food, enhance its aroma, and sometimes for medicinal or preservative purposes. Spices are integral to cuisines around the world and can be used in both savory and sweet dishes."
        },
        {
            image: "/images/sunflower-oil.jpeg",
            productName: "Sunflower Oil",
            productInfo: "Sunflower oil is a non-volatile oil extracted from sunflower seeds. It is commonly used as a cooking oil due to its high smoke point and neutral flavor. Sunflower oil is rich in unsaturated fats, including monounsaturated and polyunsaturated fats, and is considered a healthier alternative to some other cooking oils."
        },
        {
            image: "/images/sweets.jpeg",
            productName: "Sweets",
            productInfo: "Sweets, also known as confectionery or candy, are foods that are rich in sugar and have a sweet taste. They come in various forms, including chocolates, candies, pastries, and desserts, and are often enjoyed as a treat or indulgence. Sweets are an integral part of celebrations, holidays, and cultural traditions around the world."
        },
        {
            image: "/images/tea.jpg",
            productName: "Tea",
            productInfo: "Tea is an aromatic beverage prepared by pouring hot or boiling water over cured or fresh tea leaves, Camellia sinensis. It is one of the most widely consumed beverages in the world, second only to water. Tea is enjoyed for its various flavors, including black, green, oolong, and white, and is often consumed for its stimulating and calming effects."
        },
        {
            image: "/images/virgin-Coconut.jpeg",
            productName: "Virgin Coconut Oil",
            productInfo: "Virgin coconut oil is an unrefined, cold-pressed oil extracted from fresh coconut meat. It is prized for its pure, natural properties and is considered one of the healthiest cooking oils. Virgin coconut oil is rich in medium-chain fatty acids and antioxidants, making it beneficial for skin, hair, and overall health."
        }
    ];


    return (
        <>
            <Navbar />
            <div className="bg-tilt">
            <div className="relative h-60 md:h-80 overflow-hidden">
            <Image
                alt="hero"
                loading="lazy"
                width="1920"
                height="180"
                decoding="async"
                data-nimg="1"
                className="w-full h-full object-cover"
                src="/images/ourproducts.jpg"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                    <p className="text-3xl md:text-4xl font-bold text-white">Our Products</p>
                </div>
                </div>
            </div>
            <div className="bg-tilt py-8 md:py-12"> {/* Adjust padding for mobile */}
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                        {cardsData.map((product, index) => (
                            <div key={index} className="flex justify-center"> {/* Center product image */}
                                <Card image={product.image} productName={product.productName} />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <div className="bg-light-red">
                <Footer />
            </div>
        </>
    );
};

export default App;
