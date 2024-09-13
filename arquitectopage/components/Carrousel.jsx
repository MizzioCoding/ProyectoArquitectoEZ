import React, { useState } from "react";
import "../src/index.css";
import { SlArrowRight } from "react-icons/sl";

const Carrousel = ({ imagenes }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handlePrev = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? imagenes.length - 1 : prevIndex - 1
        );
    };

    const handleNext = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === imagenes.length - 1 ? 0 : prevIndex + 1
        );
    };

    const handleThumbnailClick = (index) => {
        setCurrentIndex(index);
    };

    return (
        <div className="carousel">
            <div
                className="carousel-inner"
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
                {imagenes.map((imagen, index) => (
                    <div key={index} className="carousel-item">
                        <img src={imagen} className="d-block w-100" alt={`Slide ${index}`} />
                    </div>
                ))}
            </div>
            <button className="carousel-control-prev" onClick={handlePrev}>
                <SlArrowRight className="carousel-control-prev-icon" />

            </button>
            <button className="carousel-control-next" onClick={handleNext}>
                <SlArrowRight className="carousel-control-next-icon" />
            </button>
            <div className="carousel-thumbnails">
                {imagenes.map((imagen, index) => (
                    <img
                        key={index}
                        src={imagen}
                        className={`thumbnail ${currentIndex === index ? "active" : ""}`}
                        onClick={() => handleThumbnailClick(index)}
                        alt={`Thumbnail ${index}`}
                    />
                ))}
            </div>
        </div>
    );
};

export default Carrousel;