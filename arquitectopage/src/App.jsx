import { Routes, Route } from 'react-router-dom';
import './App.css';
import Navigation from '../components/Navbar';
import Projects from '../components/Projects';
import Gallery from '../components/Gallery';
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
        </Routes>
      </div>
    </div>
  );
}

export default App;