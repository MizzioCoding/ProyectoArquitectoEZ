import { Routes, Route } from 'react-router-dom';
import './App.css';
import Navigation from '../components/Navbar';
import Projects from '../components/Projects';
import Gallery from '../components/Gallery';
import Contacto from '../components/Contacto';
import Footer from '../components/Footer';
import Logo from '../src/assets/LOGO Schreiber PNG.png';

function App() {
  const titulo = "Project";
  const imagenes = [
    'https://via.placeholder.com/300',
    'https://via.placeholder.com/300',
    'https://via.placeholder.com/300',
    'https://via.placeholder.com/300',
  ];

  return (
    <div className="App">
      <div className="App-content">
        <header className="App-header">
          <img src={Logo} className="App-logo" alt="logo" />
        </header>
      </div>
      <Navigation />
      <div>
        <Routes>
          <Route path="/" element={<Gallery />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/concursos" element={<Projects titulo={titulo} imagenes={imagenes} />} />
          <Route path="/viviendas" element={<Projects titulo={titulo} imagenes={imagenes} />} />
          <Route path="/comercial" element={<Projects titulo={titulo} imagenes={imagenes} />} />
          <Route path="/reformas" element={<Projects titulo={titulo} imagenes={imagenes} />} />
          <Route path="/estudio" element={<Projects titulo={titulo} imagenes={imagenes} />} />
          <Route path="/contacto" element={<Contacto />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;