import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { GoChevronDown } from "react-icons/go";
import "../src/index.css";
import { useInView } from "react-intersection-observer";

const Gallery = () => {
  const navigate = useNavigate();
  const [visibleCount, setVisibleCount] = useState(6);

  const images = [
    { src: "../public/Concursos/CONCURSO Urbano Imagina Bolivar/PORTADA.webp", text: "CONCURSO Urbano Imagina Bolivar" },
    // { src: "../public/Concursos/CONCURSO PARQUE SALGUERO/Po", text: "CONCURSO parque Salguero" },
    { src: "../public/Concursos/CONCURSO COSTA URBANA/0. PORTADA 1.webp", text: "CONCURSO paseo costero" },
    { src: "../public/Concursos/CONCURSO HAWA/PORTADA.webp", text: "CONCURSO HAWA" },
    // { src: "../public/Concursos/CONCURSO POLO Y PARQUE TECNOLOGICO/", text: "CONCURSO Parque y polo tecnológico" },
    { src: "../public/Concursos/CONCURSO Biblioteca Sarmiento/PORTADA.webp", text: "CONCURSO Biblioteca Sarmiento" },
    { src: "../public/Concursos/CONCURSO SUM INTA/ICONO.webp", text: "CONCURSO SUM INTA" },
    // { src: "../public/Viviendas/SMATA/", text: "MARTHA SALOTTI Edificio Faena 1" },
    // { src: "../public/Concursos/", text: "MARTHA SALOTTI Edificio Faena 2" },
    // { src: "../public/Concursos/", text: "MARTHA SALOTTI Edificio Faena 3" },
    // { src: "../public/Viviendas/", text: "Zarate" },
    { src: "../public/Viviendas/SANTA FE/1.webp", text: "Santa fe 5009" },
    // { src: "../public/Viviendas/", text: "Felipe Vallese" },
    { src: "../public/Viviendas/ALBERTI/ICONO.webp", text: "Alberti" },
    { src: "../public//Viviendas/SAN SEBASTIAN A1/FRENTE A2.webp", text: "San sebastian" },
    { src: "../public/Viviendas/SMATA/1.webp", text: "Smata" },
    { src: "../public/Comercial/ESTUDIO INA/PORTADA.webp", text: "Estudio INA" },
    { src: "../public/Comercial/DINO/RENDER PPAL final publi.webp", text: "Dino" },
    { src: "../public/Reformas/MANUELA PEDRAZA/renders/1.webp", text: "Manuela pedraza" },
    { src: "../public/Reformas/COCINA TERRADA/PORTADA.webp", text: "Terrada" },
    // { src: "../public/Reformas/", text: "Interiorismo Oceana" },
    // { src: "../public/Reformas/GUATEMALA/", text: "Guatemala" }
  ];

  const sanitizeUrl = (text) => {
    return text.toLowerCase().replace(/\s+/g, '-');
  };

  const handleImageClick = (text, src) => {
    const sanitizedUrl = sanitizeUrl(text);
    const basePath = src.split('/')[3]; // Obtiene la carpeta base (Concursos, Viviendas, etc.)
    navigate(`/${basePath}/${sanitizedUrl}`, { state: { src } });
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
            onClick={() => handleImageClick(image.text, image.src)}
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
