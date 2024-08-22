import React from 'react';
import Navbar from '../components/Navbar';
import '../styles/header.css';

type HeaderProps = {
  logoUrl: string;
  actionButtons: { label: string; url: string }[];

};

const Header: React.FC<HeaderProps> = ({
  logoUrl,
  actionButtons,
}) => {
  return (
    <header>
      <div className="top-section">
        <div className="logo">
          {logoUrl && <img src={logoUrl} alt="Logo" />}
        </div>
        <div className="actions">
          {actionButtons.map((button, index) => (
            <button key={index} className="action-button">
              {button.label}
            </button>
          ))}
        </div>
      </div>
      <Navbar />
    </header>
  );
};

export default Header;



