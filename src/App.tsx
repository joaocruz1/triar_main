import React from 'react';
import Header from './assets/Header'


function App() {
  return (
    <div className="App" style={appStyle}>
      <Header
        title="Sua empresa em boas mãos"
        subtitle="Triar Contabilidade"
        logoUrl="/img/tiar-logo.png" 
      />
      <main style={mainStyle}>
        
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
