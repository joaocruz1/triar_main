import React from 'react';
import { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import '../styles/header.css';

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
  children?: ReactNode; // Adicionando a propriedade children opcional
}

const Header: React.FC<HeaderProps> = ({ logoUrl, actionButtons, children }) => { // Incluindo children
  return (
    <header>
      <div className="top-section">
        <div className="logo">
          {logoUrl && <img src={logoUrl} alt="Logo" />}
        </div>
        <div className="actions-container"> {/* Novo contêiner */}
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
          {children} {/* Colocando children dentro do novo contêiner */}
        </div>
      </div>
    </header>
  );
};

export default Header;
