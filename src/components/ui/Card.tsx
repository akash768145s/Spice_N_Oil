// Card.tsx
import React from "react";

interface CardProps {
    image: string;
    productName: string;
}

const Card: React.FC<CardProps> = ({ image, productName }) => {
    // Extracting the title from the image path
    const imageName = image
        ? image.split("/").pop()?.split(".")[0]?.replace(/-/g, " ").replace(/\b\w/g, (char) => char.toUpperCase())
        : "Placeholder";

    return (
        <div className="card">
            <div className="front">
                {/* Display product image */}
                <div className="image" style={{ backgroundImage: `url(${image})` }}></div>
                {/* Display product name */}
                <p className="product-name">{productName}</p>
            </div>
            <style jsx>{`
                .card {
                    height: 250px;
                    width: 250px;
                    position: relative;
                    perspective: 1000px;
                }

                .front {
                    width: 100%;
                    height: 100%;
                    position: absolute;
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                    transition: transform 0.5s;
                    backface-visibility: hidden;
                }

                .image {
                    background-size: cover;
                    background-repeat: no-repeat;
                    background-position: center;
                    width: 100%;
                    height: 100%;
                    position: absolute;
                    z-index: -1;
                    transition: filter 0.5s;
                }

                .card:hover .image {
                    filter: blur(8px); /* Apply blur effect on hover */
                }

                .product-name {
                    font-weight: bold;
                    font-size: 24px; /* Increase font size for better readability */
                    margin: 0;
                    text-align: center;
                    opacity: 0; /* Initially hide product name */
                    transition: opacity 0.5s;
                }

                .card:hover .product-name {
                    opacity: 1; /* Show product name on hover */
                }
            `}</style>
        </div>
    );
};

export default Card;
