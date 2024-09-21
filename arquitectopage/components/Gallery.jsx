import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { GoChevronDown } from "react-icons/go";
import "../src/index.css";
import { useInView } from "react-intersection-observer";

const Gallery = () => {
  const navigate = useNavigate();
  const [visibleCount, setVisibleCount] = useState(6);

  const images = [
    { src: "../src/assets/Concursos/CONCURSO Urbano Imagina Bolivar/PORTADA.webp", text: "CONCURSO Urbano Imagina Bolivar" },
    // { src: "../src/assets/Concursos/CONCURSO PARQUE SALGUERO/Po", text: "CONCURSO parque Salguero" },
    { src: "../src/assets/Concursos/CONCURSO COSTA URBANA/0. PORTADA 1.webp", text: "CONCURSO paseo costero" },
    { src: "../src/assets/Concursos/CONCURSO HAWA/PORTADA.webp", text: "CONCURSO HAWA" },
    // { src: "../src/assets/Concursos/CONCURSO POLO Y PARQUE TECNOLOGICO/", text: "CONCURSO Parque y polo tecnológico" },
    { src: "../src/assets/Concursos/CONCURSO Biblioteca Sarmiento/1.webp", text: "CONCURSO Biblioteca Sarmiento" },
    { src: "../src/assets/Concursos/CONCURSO SUM INTA/ICONO.webp", text: "CONCURSO SUM INTA" },
    // { src: "../src/assets/Viviendas/SMATA/", text: "MARTHA SALOTTI Edificio Faena 1" },
    // { src: "../src/assets/Concursos/", text: "MARTHA SALOTTI Edificio Faena 2" },
    // { src: "../src/assets/Concursos/", text: "MARTHA SALOTTI Edificio Faena 3" },
    // { src: "../src/assets/Viviendas/", text: "Zarate" },
    { src: "../src/assets/Viviendas/SANTA FE/1.webp", text: "Santa fe 5009" },
    // { src: "../src/assets/Viviendas/", text: "Felipe Vallese" },
    { src: "../src/assets/Viviendas/ALBERTI/ICONO.webp", text: "Alberti" },
    { src: "../src/assets//Viviendas/SAN SEBASTIAN A1/FRENTE A2.webp", text: "San sebastian" },
    { src: "../src/assets/Viviendas/SMATA/1.webp", text: "Smata" },
    { src: "../src/assets/Comercial/ESTUDIO INA/PORTADA.webp", text: "Estudio INA" },
    { src: "../src/assets/Comercial/DINO/RENDER PPAL final publi.webp", text: "Dino" },
    { src: "../src/assets/Reformas/MANUELA PEDRAZA/renders/1.webp", text: "Manuela pedraza" },
    { src: "../src/assets/Reformas/COCINA TERRADA/PORTADA.webp", text: "Terrada" },
    // { src: "../src/assets/Reformas/", text: "Interiorismo Oceana" },
    // { src: "../src/assets/Reformas/GUATEMALA/", text: "Guatemala" }
  ];

  const sanitizeUrl = (text) => {
    return text.toLowerCase().replace(/\s+/g, '-');
  };

  const handleImageClick = (text) => {
    const sanitizedUrl = sanitizeUrl(text);
    navigate(`/${sanitizedUrl}`);
  };

  const handleLoadMore = () => {
    setVisibleCount((prevCount) => prevCount + 10);
  };

  return (
    <div className="gallery">
      <div className="gallery-container">
        {images.slice(0, visibleCount).map((image, index) => (
          <LazyImage
            key={index}
            src={image.src}
            alt={`Imagen ${index + 1}`}
            text={image.text}
            onClick={() => handleImageClick(image.text)}
          />
        ))}
      </div>
      {visibleCount < images.length && (
        <button className="load-more" onClick={handleLoadMore}>
          Ver más
          <GoChevronDown size={20} />
        </button>
      )}
    </div>
  );
};

const LazyImage = ({ src, alt, text, onClick }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <div className="gallery-item" onClick={onClick} style={{ cursor: 'pointer' }} ref={ref}>
      {inView ? <img src={src} alt={alt} /> : <div className="placeholder" />}
      <div className="overlay">
        <span className="text_2">{text}</span>
      </div>
    </div>
  );
};

export default Gallery;
