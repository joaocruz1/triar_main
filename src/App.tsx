import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Services from './pages/Services';
import Consultoria from './pages/services/1';
import WhatsAppButton from './components/whatsappButton'; // Importa o botão do WhatsApp
import './styles/app.css';

function App() {
  return (
    <Router>
      <div className="App">
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/services" element={<Services />} />
            <Route path="/services/1" element={<Consultoria />} />
          </Routes>
        </main>
        <WhatsAppButton /> {/* Adiciona o botão do WhatsApp que acompanhará a rolagem */}
      </div>
    </Router>
  );
}

export default App;
