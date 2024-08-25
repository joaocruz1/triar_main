import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/header.css';

type HeaderProps = {
  logoUrl: string;
  actionButtons: { label: string; url: string }[];
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
            <Link key={index} to={button.url} className="action-button">
              {button.label}
            </Link>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Header;
