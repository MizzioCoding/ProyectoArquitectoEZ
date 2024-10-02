import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { GoChevronDown } from "react-icons/go";
import "../src/index.css";
import { useInView } from "react-intersection-observer";

// Importa las imágenes
import portadaUrbano from "../src/assets/Concursos/CONCURSO Urbano Imagina Bolivar/PORTADA.webp";
import portadaCosta from "../src/assets/Concursos/CONCURSO COSTA URBANA/0. PORTADA 1.webp";
import portadaHawa from "../src/assets/Concursos/CONCURSO HAWA/PORTADA.webp";
import portadaBiblioteca from "../src/assets/Concursos/CONCURSO Biblioteca Sarmiento/PORTADA.webp";
import portadaSumInta from "../src/assets/Concursos/CONCURSO SUM INTA/ICONO.webp";
import portadaSantaFe from "../src/assets/Viviendas/SANTA FE/1.webp";
import portadaAlberti from "../src/assets/Viviendas/ALBERTI/ICONO.webp";
import portadaSanSebastian from "../src/assets//Viviendas/SAN SEBASTIAN A1/FRENTE A2.webp";
import portadaSmata from "../src/assets/Viviendas/SMATA/1.webp";
import portadaEstudioINA from "../src/assets/Comercial/ESTUDIO INA/PORTADA.webp";
import portadaDino from "../src/assets/Comercial/DINO/RENDER PPAL final publi.webp";
import portadaManuela from "../src/assets/Reformas/MANUELA PEDRAZA/renders/1.webp";
import portadaTerrada from "../src/assets/Reformas/COCINA TERRADA/PORTADA.webp";

const Gallery = () => {
  const navigate = useNavigate();
  const [visibleCount, setVisibleCount] = useState(6);

  const images = [
    { src: portadaUrbano, text: "CONCURSO Urbano Imagina Bolivar" },
    { src: portadaCosta, text: "CONCURSO paseo costero" },
    { src: portadaHawa, text: "CONCURSO HAWA" },
    { src: portadaBiblioteca, text: "CONCURSO Biblioteca Sarmiento" },
    { src: portadaSumInta, text: "CONCURSO SUM INTA" },
    { src: portadaSantaFe, text: "Santa fe 5009" },
    { src: portadaAlberti, text: "Alberti" },
    { src: portadaSanSebastian, text: "San sebastian" },
    { src: portadaSmata, text: "Smata" },
    { src: portadaEstudioINA, text: "Estudio INA" },
    { src: portadaDino, text: "Dino" },
    { src: portadaManuela, text: "Manuela pedraza" },
    { src: portadaTerrada, text: "Terrada" }
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