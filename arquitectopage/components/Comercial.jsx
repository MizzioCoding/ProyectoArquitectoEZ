import React, { useState, useEffect } from "react";
import Carrousel from "./Carrousel"; // Ensure this component exists and works correctly
import { useLocation, useParams } from "react-router-dom";

const Comercial = () => {
  const location = useLocation();
  const { project } = useParams();
  const { src } = location.state;
  const [imagesByFolder, setImagesByFolder] = useState({});

  useEffect(() => {
    const loadImages = async () => {
      // Remove the last part of the path after the last '/'
      const folderPath = src.substring(0, src.lastIndexOf('/')) + '/';
      console.log("Folder Path que me llega:", folderPath); // Debugging line

      // Construct the correct path for import.meta.glob
      const context = import.meta.glob('../src/assets/Comercial/**/*.{png,jpe?g,webp}');
      console.log("Context Keys:", Object.keys(context)); // Debugging line

      const imagesByFolderTemp = {};

      await Promise.all(
        Object.keys(context).map(async (key) => {
          if (key.startsWith(folderPath)) {
            const module = await context[key]();
            const imagePath = module.default || key;
            const folderName = key.split('/')[key.split('/').length - 2]; // Assuming folder name is at this position
            if (!imagesByFolderTemp[folderName]) {
              imagesByFolderTemp[folderName] = [];
            }
            imagesByFolderTemp[folderName].push(imagePath);
          }
        })
      );

      setImagesByFolder(imagesByFolderTemp);
    };

    loadImages();
  }, [src]);

  return (
    <div className="Comercial">
      <h2>{project}</h2>
      {Object.keys(imagesByFolder).map((folderName) => (
        <div key={folderName}>
          <h3>{folderName}</h3>
          <Carrousel images={imagesByFolder[folderName]} />
        </div>
      ))}
    </div>
  );
};

export default Comercial;