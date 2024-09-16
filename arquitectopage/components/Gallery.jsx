import React from "react";
import { useNavigate } from "react-router-dom";
import "../src/index.css";

const Gallery = () => {
    const navigate = useNavigate();

    const images = [
        { src: "https://via.placeholder.com/300", text: "CONCURSO Urbano Imagina Bolivar" },
        { src: "https://via.placeholder.com/300", text: "CONCURSO parque Salguero" },
        { src: "https://via.placeholder.com/300", text: "CONCURSO paseo costero" },
        { src: "https://via.placeholder.com/300", text: "CONCURSO HAWA" },
        { src: "https://via.placeholder.com/300", text: "CONCURSO Parque y polo tecnológico" },
        { src: "https://via.placeholder.com/300", text: "CONCURSO Biblioteca Sarmiento" },
        { src: "https://via.placeholder.com/300", text: "CONCURSO SUM INTA" },
        { src: "https://via.placeholder.com/300", text: "MARTHA SALOTTI Edificio Faena 1" },
        { src: "https://via.placeholder.com/300", text: "MARTHA SALOTTI Edificio Faena 2" },
        { src: "https://via.placeholder.com/300", text: "MARTHA SALOTTI Edificio Faena 3" },
        { src: "https://via.placeholder.com/300", text: "Zarate" },
        { src: "https://via.placeholder.com/300", text: "Santa fe 5009" },
        { src: "https://via.placeholder.com/300", text: "CONCURSO HAWA" },
        { src: "https://via.placeholder.com/300", text: "Felipe Vallese" },
        { src: "https://via.placeholder.com/300", text: "Alberti" },
        { src: "https://via.placeholder.com/300", text: "San sebastian" },
        { src: "https://via.placeholder.com/300", text: "Smata" },
        { src: "https://via.placeholder.com/300", text: "Estudio INA" },
        { src: "https://via.placeholder.com/300", text: "Dino" },
        { src: "https://via.placeholder.com/300", text: "Manuela pedraza" },
        { src: "https://via.placeholder.com/300", text: "Terrada" },
        { src: "https://via.placeholder.com/300", text: "Interiorismo Oceana" },
        { src: "https://via.placeholder.com/300", text: "Guatemala" }
    ];

    const sanitizeUrl = (text) => {
        return text.toLowerCase().replace(/\s+/g, '-');
    };

    const handleImageClick = (text) => {
        const sanitizedUrl = sanitizeUrl(text);
        navigate(`/${sanitizedUrl}`);
    };

    return (
        <div className="gallery">
            <div className="gallery-container">
                {images.map((image, index) => (
                    <div
                        className="gallery-item"
                        key={index}
                        onClick={() => handleImageClick(image.text)}
                        style={{ cursor: 'pointer' }}
                    >
                        <img src={image.src} alt={`Imagen ${index + 1}`} />
                        <div className="overlay">
                            <span className="text_2">{image.text}</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Gallery;
