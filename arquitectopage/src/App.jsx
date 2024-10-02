import { Routes, Route } from 'react-router-dom';
import './App.css';
import Navigation from '../components/Navbar';
import Projects from '../components/Projects';
import Gallery from '../components/Gallery';
import Contacto from '../components/Contacto';
import Footer from '../components/Footer';
import Logo from '../public/LOGO Schreiber PNG.png';
import Concursos from '../components/Concursos';
import Viviendas from '../components/Viviendas';
import Comercial from '../components/Comercial';
import Reformas from '../components/Reformas';

function App() {
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
          <Route path="/proyectos" element={<Gallery />} />
          <Route path="/concursos/:project" element={<Concursos />} />
          <Route path="/viviendas/:project" element={<Viviendas />} />
          <Route path="/comercial/:project" element={<Comercial />} />
          <Route path="/reformas/:project" element={<Reformas />} />
          <Route path="/concursos" element={<Projects titulo={"Concursos"} />} />
          <Route path="/viviendas" element={<Projects titulo={"Viviendas"}  />} />
          <Route path="/comercial" element={<Projects titulo={"Comercial"}  />} />
          <Route path="/reformas" element={<Projects titulo={"Reformas"} />} />
          <Route path="/estudio" element={<Projects titulo={"Estudio"}/>} />
          <Route path="/contacto" element={<Contacto />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;