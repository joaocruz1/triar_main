import React, { useState } from 'react';
import { ReactNode } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../styles/header.css';

// Importar dinamicamente páginas
const pages = import.meta.glob('/src/pages/*.tsx'); // Usando Vite
const pageNames = Object.keys(pages).map((path) => {
  const match = path.match(/\/src\/pages\/(.*)\.tsx$/);
  return match ? `/${match[1].toLowerCase()}` : '';
}).filter(Boolean);

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
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchSuggestions, setSearchSuggestions] = useState<string[]>([]);
  const [hasNoResults, setHasNoResults] = useState(false);
  const navigate = useNavigate();

  const toggleSearchModal = () => {
    setIsSearchOpen(!isSearchOpen);
    if (isSearchOpen) {
      setSearchQuery(''); // Limpar pesquisa ao fechar
      setSearchSuggestions([]); // Limpar sugestões ao fechar
      setHasNoResults(false); // Resetar estado de "nenhum resultado"
    }
  };

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const query = event.target.value;
    setSearchQuery(query);
    if (query.length > 0) {
      // Filtrar páginas com base na pesquisa
      const suggestions = pageNames.filter(page => page.toLowerCase().includes(query.toLowerCase()));
      setSearchSuggestions(suggestions);

      // Verificar se há resultados
      if (suggestions.length === 0) {
        setHasNoResults(true);
      } else {
        setHasNoResults(false);
      }
    } else {
      setSearchSuggestions([]);
      setHasNoResults(false);
    }
  };

  const handleSearchSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    const matchingPage = searchSuggestions[0];
    if (matchingPage) {
      navigate(matchingPage);
    }
  };

  const toggleSuggestions = () => {
    setShowSuggestions(!showSuggestions);
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
          <form onSubmit={handleSearchSubmit} className='form-model'>
            <div className="search-input-container">
              <input
                type="text"
                placeholder="Digite sua pesquisa..."
                className={`search-input ${hasNoResults ? 'error' : ''}`}
                value={searchQuery}
                onChange={handleSearchChange}
              />
              <button type="button" className="search-suggestions-button" onClick={toggleSuggestions}>
                Sugestões
              </button>
            </div>
            <button type="submit" className="search-submit-button">Pesquisar</button>

            {/* Renderizar sugestões de pesquisa dentro do input */}
            {showSuggestions && searchQuery && (
              <>
                {searchSuggestions.length > 0 ? (
                  <ul className="search-suggestions active">
                    {searchSuggestions.map((suggestion, index) => (
                      <li key={index} onClick={() => navigate(suggestion)}>
                        {suggestion}
                      </li>
                    ))}
                  </ul>
                ) : hasNoResults && (
                  <div className="error-message">
                    Página não encontrada
                  </div>
                )}
              </>
            )}
          </form>
        </div>
      </div>
    </header>
  );
};

export default Header;
