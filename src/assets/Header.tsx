import React, { useState } from 'react';
import { ReactNode } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../styles/header.css';
import '../styles/main.css';

// Importar dinamicamente páginas
const pages = import.meta.glob('/src/pages/*.tsx'); // Usando Vite
const pageNames = Object.keys(pages)
  .map((path) => {
    const match = path.match(/\/src\/pages\/(.*)\.tsx$/);
    return match ? `/${match[1].toLowerCase()}` : '';
  })
  .filter(Boolean);

interface HeaderProps {
  logoUrl: string;
  actionButtons: {
    label: string;
    url: string;
    dropdownItems?: {
      label: string;
      img: string;
      url: string;
    }[];
  }[];
  children?: ReactNode;
}

const Header: React.FC<HeaderProps> = ({ logoUrl, actionButtons, children }) => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchSuggestions, setSearchSuggestions] = useState<string[]>([]);
  const [errorMessage, setErrorMessage] = useState(''); // Estado para a mensagem de erro
  const navigate = useNavigate();

  const toggleSearchModal = () => {
    setIsSearchOpen(!isSearchOpen);
    if (isSearchOpen) {
      setSearchQuery(''); // Limpar pesquisa ao fechar
      setSearchSuggestions([]); // Limpar sugestões ao fechar
      setErrorMessage(''); // Resetar mensagem de erro ao fechar
    }
  };

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const query = event.target.value;
    setSearchQuery(query);
    setSearchSuggestions([]); // Limpa sugestões durante a digitação
    setErrorMessage(''); // Limpa mensagem de erro durante a digitação
  };

  const handleSearchSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    
    if (searchQuery.length > 0) {
      // Filtrar páginas com base na pesquisa
      const suggestions = pageNames.filter((page) =>
        page.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setSearchSuggestions(suggestions);

      // Definir mensagem de erro personalizada
      if (suggestions.length === 0) {
        setErrorMessage('Página não encontrada.');
      } else if (suggestions.length > 0 && suggestions[0] !== `/${searchQuery.toLowerCase()}`) {
        setErrorMessage(`Página não encontrada. Você está procurando por "${suggestions[0].substring(1)}"?`);
      } else {
        setErrorMessage('');
      }

      // Navega para a primeira sugestão encontrada
      const matchingPage = suggestions[0];
      if (matchingPage) {
        navigate(matchingPage);
      }
    } else {
      setErrorMessage('Por favor, insira um termo de pesquisa.');
    }
  };

  return (
    <header>
      <div className="top-section">
        <div className="logo">
          {logoUrl && <img src={logoUrl} alt="Logo" />}
        </div>
        <div className="actions-container">
          <div className="actions">
            {actionButtons.map((button, index) => (
              <div key={index} className="dropdown">
                <Link to={button.url} className="action-button">
                  {button.label}
                </Link>
                {button.dropdownItems && (
                  <div className="dropdown-content">
                    {button.dropdownItems.map((item, itemIndex) => (
                      <Link key={itemIndex} to={item.url}>
                        <img src={item.img} className="dropdown-item-img primary-img" />
                        {item.label}
                        <img src="/img/seta-direita.png" className="dropdown-item-img arrow-img" />
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
          {children}

          {/* Ícone de pesquisa que abre o modal */}
          <button onClick={toggleSearchModal} className="search-icon-button">
            <img src="/img/lupa.png" alt="Pesquisar" className="search-icon" />
          </button>
        </div>
      </div>

      {/* Modal de pesquisa */}
      <div className={`search-modal ${isSearchOpen ? 'active' : ''}`}>
        <div className="search-modal-content">
          <button onClick={toggleSearchModal} className="close-modal-button">
            <img src="/img/close.png" alt="Fechar" className="close-icon" />
          </button>
          <form onSubmit={handleSearchSubmit} className="form-model">
          <h1 className='title-search'>Busca Triar</h1>
            <div className="search-input-container">
              <input
                type="text"
                placeholder="Digite sua pesquisa..."
                className="search-input" // Removido o estilo de erro aqui
                value={searchQuery}
                onChange={handleSearchChange}
              />
            </div>
            <button type="submit" className="search-submit-button">Pesquisar</button>

            {/* Mostrar mensagem de erro personalizada após o clique em "Pesquisar" */}
            {errorMessage && (
              <div className="error-message">
                {errorMessage}
              </div>
            )}
          </form>
        </div>
      </div>
    </header>
  );
};

export default Header;
