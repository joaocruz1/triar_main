import React, { useState } from 'react';
import Header from "../assets/Header";

const Navbar = () => {
  const [isSearchModalActive, setIsSearchModalActive] = useState(false);

  // Funções para abrir e fechar o modal de pesquisa
  const openSearchModal = () => setIsSearchModalActive(true);
  const closeSearchModal = () => setIsSearchModalActive(false);

  return (
    <>
      <Header
        logoUrl="/img/logo-triar.png"
        actionButtons={[
          {
            label: "Para sua Empresa!",
            url: "/foryou",
            dropdownItems: [
              { label: "Lucro Real", img: "/img/lucro_real.png", url: "/foryou/lucroreal" },
              { label: "Lucro Presumido", img: "", url: "/foryou/lucropresumido" },
              { label: "Simples Nacional", img: "/img/simples-nacional1.png", url: "/foryou/simplesnacional" },
              { label: "Regime Especial", img: "", url: "/contact/regimeespecial" }
            ]
          },
          {
            label: "Nossas Serviços",
            url: "/services",
            dropdownItems: [
              { label: "Consultoria", img: "", url: "/services/consulting" },
              { label: "Auditoria", img: "", url: "/services/audit" }
            ]
          },
          {
            label: "Quem Somos",
            url: "/info"
          }
        ]}
      >
        {/* Remova qualquer ícone de pesquisa duplicado aqui */}
      </Header>

      {/* Modal de Pesquisa */}
      {isSearchModalActive && (
        <div className="search-modal active">
          <div className="search-modal-content">
            <input type="text" placeholder="Digite sua pesquisa..." />
            <button onClick={closeSearchModal} className="close-modal-button">
              <img src="/img/close-icon.png" alt="Fechar" className="close-icon" />
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
