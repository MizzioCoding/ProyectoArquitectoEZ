import { useState } from 'react'
import './App.css'
import Navigation from '../components/Navbar.jsx'
import Logo from './assets/LOGO Schreiber PNG.png'
import Gallery from '../components/Gallery.jsx'

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
        <Gallery />
      </div>
    </div>
  )
}

export default App
