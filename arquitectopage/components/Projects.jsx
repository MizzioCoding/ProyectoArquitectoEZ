import React from 'react';

const Projects = ({ titulo, imagenes }) => {
  return (
    <div style={styles.container}>
      <h2>{titulo}</h2>
      <div style={styles.galeria}>
        {imagenes.map((imagen, index) => (
          <img key={index} src={imagen} alt={`Imagen ${index + 1}`} style={styles.imagen} />
        ))}
      </div>
    </div>
  );
};

const styles = {
  container: {
    textAlign: 'center',
    padding: '20px',
  },
  galeria: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(150px, 1fr))',
    gap: '10px',
    justifyContent: 'center',
  },
  imagen: {
    width: '100%',
    height: 'auto',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  },
};

export default Projects;
