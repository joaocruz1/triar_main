import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Navbar';
import Contact from './pages/Contact';  // Supondo que você tenha um componente de página de contato
import Services from './pages/Services';  // Supondo que você tenha um componente de página de serviços
import './styles/app.css';

function App() {
  return (
    <Router>
      <div className="App">
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/services" element={<Services />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
