import React from 'react';
import Header from './assets/Header';

function App() {
  return (
    <div className="App" style={appStyle}>
      <Header
        logoUrl="/img/logo-triar.png"
        actionButtons={[
          { label: "Fale Conosco", url: "/contact" },
          { label: "Nossas Soluções", url: "/solutions" }
        ]}
      />
      <main style={mainStyle}>
        {/* Your main content here */}
      </main>
    </div>
  );
}

// Estilos Inline para o App
const appStyle: React.CSSProperties = {
  fontFamily: 'Arial, sans-serif',
  textAlign: 'center',
};

const mainStyle: React.CSSProperties = {
  padding: '20px',
};

export default App;
