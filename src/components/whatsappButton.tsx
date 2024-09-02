// src/components/WhatsAppButton.js

import React from 'react';
import '../styles/whatsappButton.css'; // Importa o CSS específico do botão

const WhatsAppButton = () => {
  return (
    <a
      href="https://wa.me/553536361407" // Substitua pelo número de telefone desejado
      className="whatsapp-button"
      target="_blank"
      rel="noopener noreferrer"
    >
      <img 
        src="/img/whatsapp-icon.png" // Substitua pelo caminho da imagem do ícone do WhatsApp
        alt="WhatsApp"
        className="whatsapp-icon"
      />
      <div className="whatsapp-tooltip">Converse diretamente conosco!</div>
    </a>
  );
};

export default WhatsAppButton;
