import React from 'react';
import './App.css';
import Inicio from './components/Inicio';
import SobreMi from './components/SobreMi';
import Skills from './components/Skills';
import Navbar from './components/Navbar';
import Portafolio from './components/Portafolio';

//import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    /*<Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/SobreMi" element={<SobreMi />} />
          <Route path="/Skills" element={<Skills />} />
        </Routes>
      </div>
    </Router>*/
    <div className="App">
        <Navbar/>
        <Inicio />
        <SobreMi />
        <Skills/>
        <Portafolio/>
      </div>
  );
}

export default App;
