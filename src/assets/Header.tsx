import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/header.css';

type HeaderProps = {
  logoUrl: string;
  actionButtons: { label: string; url: string; dropdownItems?: { label: string; img: string; url: string }[] }[];
};

const Header: React.FC<HeaderProps> = ({ logoUrl, actionButtons }) => {
  return (
    <header>
      <div className="top-section">
        <div className="logo">
          {logoUrl && <img src={logoUrl} alt="Logo" />}
        </div>
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
      </div>
    </header>
  );
};

export default Header;
