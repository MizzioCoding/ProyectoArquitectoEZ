import React, { useState, useEffect } from "react";
import Carrousel from "./Carrousel";
import "../src/index.css";

const defaultImages = [
  "https://via.placeholder.com/300",
  "https://via.placeholder.com/300",
  "https://via.placeholder.com/300",
  "https://via.placeholder.com/300",
];

const Projects = ({ titulo }) => {
  const [subfolders, setSubfolders] = useState([]);
  const [imagePaths, setImagePaths] = useState({});

  useEffect(() => {
    const getSubfolders = async () => {
      const context = import.meta.glob("../src/assets/**/RENDERS/*");
      console.log("Rutas encontradas con glob:", Object.keys(context));
      
      const subfoldersSet = new Set();
      for (const key of Object.keys(context)) {
        const parts = key.split('/');
        console.log("Partes de la ruta:", parts);
        const folderIndex = parts.indexOf(titulo);  // Asegúrate de que `titulo` sea exactamente igual a la subcarpeta
        console.log(`Buscando la carpeta ${titulo} en:`, parts, "Índice:", folderIndex);
        if (folderIndex !== -1 && parts[folderIndex + 2] === 'RENDERS') {
          subfoldersSet.add(parts[folderIndex + 1]);
        }
      }

      return Array.from(subfoldersSet);
    };

    const getImagePaths = async (subcarpeta) => {
      const context = import.meta.glob("../src/assets/**/RENDERS/*");
      const imagePaths = [];

      for (const key of Object.keys(context)) {
        const parts = key.split('/');
        const folderIndex = parts.indexOf(titulo);
        if (folderIndex !== -1 && parts[folderIndex + 1] === subcarpeta && parts[folderIndex + 2] === 'RENDERS') {
          imagePaths.push(key);
        }
      }

      return imagePaths;
    };

    const fetchSubfoldersAndImages = async () => {
      const subfolders = await getSubfolders();
      console.log("Subfolders:", subfolders);
      setSubfolders(subfolders);

      const paths = {};
      for (const subcarpeta of subfolders) {
        const images = await getImagePaths(subcarpeta);
        console.log(`Images for ${subcarpeta}:`, images);
        paths[subcarpeta] = images.length > 0 ? images : defaultImages;
      }
      console.log("Image paths:", paths);
      setImagePaths(paths);
    };

    fetchSubfoldersAndImages();
  }, [titulo]);

  return (
    <div className="projects">
      {subfolders.map((subcarpeta, index) => (
        <div key={index} className="project">
          <h2>{subcarpeta}</h2>
          <Carrousel images={imagePaths[subcarpeta] || defaultImages} />
        </div>
      ))}
    </div>
  );
};

export default Projects;